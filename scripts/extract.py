import os
import json

pdf_mapping = {
    "home.pdf": "home.txt",
    "about us.pdf": "about-us.txt",
    "web development.pdf": "web-development.txt",
    "web application.pdf": "software-development.txt",
    "geosptial intelligence.pdf": "geospatial-intelligence.txt",
    "digital growth.pdf": "digital-growth.txt",
    "privacy policy.pdf": "privacy-policy.txt",
    "impressum.pdf": "impressum.txt"
}

workspace_dir = "/Users/x/Downloads/building-future/Portfolio"
output_dir = os.path.join(workspace_dir, "content", "pdf-text")

def extract_with_pdfplumber(pdf_path):
    try:
        import pdfplumber
        text_content = []
        with pdfplumber.open(pdf_path) as pdf:
            for page in pdf.pages:
                text = page.extract_text()
                if text:
                    text_content.append(text)
        return "\n--- PAGE BREAK ---\n".join(text_content), "pdfplumber"
    except Exception as e:
        return None, str(e)

def extract_with_pypdf(pdf_path):
    try:
        import pypdf
        reader = pypdf.PdfReader(pdf_path)
        text_content = []
        for page in reader.pages:
            text = page.extract_text()
            if text:
                text_content.append(text)
        return "\n--- PAGE BREAK ---\n".join(text_content), "pypdf"
    except Exception as e:
        return None, str(e)

def extract_with_fitz(pdf_path):
    try:
        import fitz
        doc = fitz.open(pdf_path)
        text_content = []
        for page in doc:
            text = page.get_text()
            if text:
                text_content.append(text)
        return "\n--- PAGE BREAK ---\n".join(text_content), "fitz"
    except Exception as e:
        return None, str(e)

def main():
    os.makedirs(output_dir, exist_ok=True)
    manifest = {}

    for pdf_name, txt_name in pdf_mapping.items():
        pdf_path = os.path.join(workspace_dir, pdf_name)
        txt_path = os.path.join(output_dir, txt_name)
        
        if not os.path.exists(pdf_path):
            print(f"PDF not found: {pdf_path}")
            continue

        # Try pdfplumber first
        text, method = extract_with_pdfplumber(pdf_path)
        
        # Fallback to pypdf second
        if not text:
            text, method = extract_with_pypdf(pdf_path)
            
        # Fallback to fitz third
        if not text:
            text, method = extract_with_fitz(pdf_path)

        if text:
            with open(txt_path, "w", encoding="utf-8") as f:
                f.write(text)
            print(f"Extracted {pdf_name} -> {txt_name} via {method}")
            manifest[pdf_name] = {
                "extracted_file": f"content/pdf-text/{txt_name}",
                "method": method,
                "route": "/" if pdf_name == "home.pdf" else 
                         "/about" if pdf_name == "about us.pdf" else
                         "/privacy-policy" if pdf_name == "privacy policy.pdf" else
                         "/impressum" if pdf_name == "impressum.pdf" else
                         f"/services/{txt_name.replace('.txt', '')}"
            }
        else:
            print(f"Failed to extract {pdf_name}")

    with open(os.path.join(output_dir, "index.json"), "w", encoding="utf-8") as f:
        json.dump(manifest, f, indent=2)

if __name__ == "__main__":
    main()

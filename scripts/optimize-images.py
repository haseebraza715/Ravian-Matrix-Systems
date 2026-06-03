#!/usr/bin/env python3
import os
from PIL import Image

PUBLIC_DIR = "public"

def optimize_png(filename, target_width):
    path = os.path.join(PUBLIC_DIR, filename)
    if not os.path.exists(path):
        print(f"File not found: {path}")
        return
    
    orig_size = os.path.getsize(path)
    img = Image.open(path)
    
    # Calculate aspect ratio
    w, h = img.size
    aspect = h / w
    target_height = int(target_width * aspect)
    
    # Resize image
    img_resized = img.resize((target_width, target_height), Image.Resampling.LANCZOS)
    
    # Save optimized PNG
    img_resized.save(path, "PNG", optimize=True)
    new_size = os.path.getsize(path)
    print(f"Optimized {filename}: {orig_size/1024:.1f} KB -> {new_size/1024:.1f} KB (Resized from {w}x{h} to {target_width}x{target_height})")

def optimize_jpg(filename, quality=85):
    path = os.path.join(PUBLIC_DIR, filename)
    if not os.path.exists(path):
        print(f"File not found: {path}")
        return
    
    orig_size = os.path.getsize(path)
    img = Image.open(path)
    
    # Save optimized JPEG
    img.save(path, "JPEG", optimize=True, quality=quality)
    new_size = os.path.getsize(path)
    print(f"Optimized {filename}: {orig_size/1024:.1f} KB -> {new_size/1024:.1f} KB")

def main():
    print("Optimizing PNG logos & team portraits...")
    optimize_png("r-logo.png", 256)
    optimize_png("team-arslan.png", 512)
    optimize_png("team-haseeb.png", 512)
    optimize_png("team-manisha.png", 512)
    
    print("\nOptimizing JPEG hero visuals...")
    optimize_jpg("hero-geospatial.jpg", 85)

if __name__ == "__main__":
    main()

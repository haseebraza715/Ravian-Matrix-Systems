#!/usr/bin/env python3
"""Regenerate transparent team-arslan.png and team-haseeb.png from sources with rembg."""
from io import BytesIO
from pathlib import Path

from PIL import Image
from rembg import remove

PUBLIC = Path(__file__).resolve().parent.parent / "public"

for name in ("team-arslan", "team-haseeb"):
    path = PUBLIC / f"{name}.png"
    print(f"Processing {path.name}...")
    result = remove(path.read_bytes())
    img = Image.open(BytesIO(result)).convert("RGBA")
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
    pad = 12
    canvas = Image.new("RGBA", (img.width + pad * 2, img.height + pad * 2), (0, 0, 0, 0))
    canvas.paste(img, (pad, pad), img)
    canvas.save(path, "PNG", optimize=True)
    print(f"  saved {canvas.size}")

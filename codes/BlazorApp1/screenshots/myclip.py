import os
import sys
from PIL import Image

def clip_images_in_folder(folder_path, output_folder, crop_box):
    # フォルダが存在しない場合は作成
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    # 指定されたフォルダ内のすべてのファイルを処理
    for filename in os.listdir(folder_path):
        if filename.lower().endswith(('.png', '.jpg', '.jpeg', '.bmp', '.gif')):  # 対応する画像フォーマット
            image_path = os.path.join(folder_path, filename)
            image = Image.open(image_path)
            cropped_image = image.crop(crop_box)  # 画像をクロップ
            output_path = os.path.join(output_folder, filename)
            cropped_image.save(output_path)  # クロップした画像を保存
            print(f'Cropped {filename} and saved to {output_path}')

if __name__ == "__main__":
    if len(sys.argv) != 7:
        print("Usage: python script.py folder_path output_folder left top right bottom")
        sys.exit(1)

    folder_path = sys.argv[1]
    output_folder = sys.argv[2]
    left = int(sys.argv[3])
    top = int(sys.argv[4])
    right = int(sys.argv[5])
    bottom = int(sys.argv[6])
    
    crop_box = (left, top, right, bottom)  # クリッピングする画像の四隅の座標 (左, 上, 右, 下)

    clip_images_in_folder(folder_path, output_folder, crop_box)

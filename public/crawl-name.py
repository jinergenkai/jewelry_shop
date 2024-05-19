import os
import json

image_extensions = ('.png', '.jpg', '.jpeg', '.gif', '.bmp')

def get_image_paths(directory, output_direct):
    image_paths = []
    for root, _, files in os.walk(directory):
        for file in files:
            if file.lower().endswith(image_extensions):
                # image_paths.append(os.path.join(root, file))

                # Tạo đường dẫn tương đối từ thư mục chứa file script đến file ảnh
                relative_path = os.path.join(os.path.relpath(root, output_direct), file)
                relative_path = '/' + relative_path.replace("\\", "/")
                image_paths.append(relative_path)
    return image_paths

def save_to_json(data, filename):
    with open(filename, 'w') as f:
        json.dump(data, f, indent=4)




def main():
    # Lấy thư mục hiện tại
    current_directory = os.path.dirname(os.path.abspath(__file__))
    image_directory = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'jewelry')
    
    # Lấy danh sách các file ảnh
    image_paths = get_image_paths(image_directory, current_directory)
    
    # Đường dẫn file JSON
    json_file = os.path.join(current_directory, 'image_paths.json')
    
    # Lưu vào file JSON
    save_to_json(image_paths, json_file)
    
    print(f"Saved {len(image_paths)} image paths to {json_file}")

if __name__ == "__main__":
    main()
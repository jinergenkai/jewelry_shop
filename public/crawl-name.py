import os
import json

# Các phần mở rộng của file ảnh mà chúng ta sẽ tìm kiếm
image_extensions = ('.png', '.jpg', '.jpeg', '.gif', '.bmp')

def get_image_paths(directory, output_direct):
    """
    Hàm này sẽ duyệt qua tất cả các file trong thư mục 'directory' và 
    tìm kiếm các file có phần mở rộng nằm trong 'image_extensions'.
    Đường dẫn tương đối của các file này sẽ được phân loại theo thư mục con thứ hai.
    """
    image_paths_dict = {}
    
    for root, _, files in os.walk(directory):
        for file in files:
            if file.lower().endswith(image_extensions):
                # Tạo đường dẫn tương đối từ thư mục chứa file script đến file ảnh
                relative_path = os.path.join(os.path.relpath(root, output_direct), file)
                relative_path = '/' + relative_path.replace("\\", "/")
                
                # Lấy tên thư mục thứ hai
                parts = relative_path.split('/')
                if len(parts) > 2:
                    subdir = parts[2]
                    if subdir not in image_paths_dict:
                        image_paths_dict[subdir] = []
                    image_paths_dict[subdir].append(relative_path)
    
    # Chuyển đổi từ dict sang list các object
    image_paths_list = [{"name": key, "images": value} for key, value in image_paths_dict.items()]
    return image_paths_list

def save_to_json(data, filename):
    """
    Hàm này lưu dữ liệu 'data' vào file JSON với tên 'filename'.
    """
    with open(filename, 'w') as f:
        json.dump(data, f, indent=4)

def main():
    # Lấy thư mục hiện tại nơi script đang chạy
    current_directory = os.path.dirname(os.path.abspath(__file__))
    # Đặt thư mục chứa ảnh, giả sử thư mục này nằm cùng cấp với thư mục hiện tại
    image_directory = os.path.join(current_directory, 'jewelry')
    
    # Lấy danh sách các file ảnh trong thư mục 'image_directory'
    image_paths = get_image_paths(image_directory, current_directory)
    
    # Đường dẫn để lưu file JSON
    json_file = os.path.join(current_directory, 'image_paths.json')
    
    # Lưu danh sách đường dẫn ảnh vào file JSON
    save_to_json(image_paths, json_file)
    
    print(f"Saved image paths to {json_file}")

if __name__ == "__main__":
    main()

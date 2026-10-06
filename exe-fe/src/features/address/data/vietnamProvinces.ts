export interface District {
  name: string;
  wards: string[];
}

export interface Province {
  name: string;
  districts: District[];
}

export const VIETNAM_DIVISIONS: Province[] = [
  {
    name: 'TP. Hồ Chí Minh',
    districts: [
      {
        name: 'TP. Thủ Đức',
        wards: [
          'Phường Linh Trung',
          'Phường Linh Xuân',
          'Phường Linh Chiểu',
          'Phường Hiệp Phú',
          'Phường Tăng Nhơn Phú A',
          'Phường Tăng Nhơn Phú B',
          'Phường Phước Long A',
          'Phường Phước Long B',
          'Phường Thảo Điền',
          'Phường An Phú',
          'Phường Bình Trưng Tây',
          'Phường Bình Trưng Đông',
          'Phường Tam Bình',
          'Phường Tam Phú',
        ],
      },
      {
        name: 'Quận 1',
        wards: ['Phường Bến Nghé', 'Phường Bến Thành', 'Phường Đa Kao', 'Phường Tân Định', 'Phường Phạm Ngũ Lão', 'Phường Nguyễn Cư Trinh', 'Phường Cầu Kho', 'Phường Cầu Ông Lãnh', 'Phường Cô Giang', 'Phường Nguyễn Thái Bình'],
      },
      {
        name: 'Quận 3',
        wards: ['Phường Võ Thị Sáu', 'Phường 1', 'Phường 2', 'Phường 3', 'Phường 4', 'Phường 5', 'Phường 9', 'Phường 11', 'Phường 12', 'Phường 14'],
      },
      {
        name: 'Quận 5',
        wards: ['Phường 1', 'Phường 2', 'Phường 3', 'Phường 4', 'Phường 5', 'Phường 6', 'Phường 7', 'Phường 8', 'Phường 9', 'Phường 10', 'Phường 11', 'Phường 12', 'Phường 13', 'Phường 14'],
      },
      {
        name: 'Quận 7',
        wards: ['Phường Tân Thuận Đông', 'Phường Tân Thuận Tây', 'Phường Tân Kiểng', 'Phường Tân Hưng', 'Phường Bình Thuận', 'Phường Tân Phong', 'Phường Tân Phú', 'Phường Phú Thuận', 'Phường Phú Mỹ'],
      },
      {
        name: 'Quận 10',
        wards: ['Phường 1', 'Phường 2', 'Phường 4', 'Phường 5', 'Phường 6', 'Phường 7', 'Phường 8', 'Phường 9', 'Phường 10', 'Phường 11', 'Phường 12', 'Phường 13', 'Phường 14', 'Phường 15'],
      },
      {
        name: 'Quận Bình Thạnh',
        wards: ['Phường 1', 'Phường 2', 'Phường 3', 'Phường 5', 'Phường 6', 'Phường 7', 'Phường 11', 'Phường 12', 'Phường 13', 'Phường 14', 'Phường 15', 'Phường 17', 'Phường 19', 'Phường 21', 'Phường 22', 'Phường 24', 'Phường 25', 'Phường 26', 'Phường 27', 'Phường 28'],
      },
      {
        name: 'Quận Gò Vấp',
        wards: ['Phường 1', 'Phường 3', 'Phường 4', 'Phường 5', 'Phường 6', 'Phường 7', 'Phường 8', 'Phường 9', 'Phường 10', 'Phường 11', 'Phường 12', 'Phường 13', 'Phường 14', 'Phường 15', 'Phường 16', 'Phường 17'],
      },
      {
        name: 'Quận Phú Nhuận',
        wards: ['Phường 1', 'Phường 2', 'Phường 3', 'Phường 4', 'Phường 5', 'Phường 7', 'Phường 8', 'Phường 9', 'Phường 10', 'Phường 11', 'Phường 13', 'Phường 15', 'Phường 17'],
      },
      {
        name: 'Quận Tân Bình',
        wards: ['Phường 1', 'Phường 2', 'Phường 3', 'Phường 4', 'Phường 5', 'Phường 6', 'Phường 7', 'Phường 8', 'Phường 9', 'Phường 10', 'Phường 11', 'Phường 12', 'Phường 13', 'Phường 14', 'Phường 15'],
      },
      {
        name: 'Huyện Bình Chánh',
        wards: ['Thị trấn Tân Túc', 'Xã An Phú Tây', 'Xã Bình Hưng', 'Xã Bình Lợi', 'Xã Đa Phước', 'Xã Hưng Long', 'Xã Lê Minh Xuân', 'Xã Tân Kiên', 'Xã Vĩnh Lộc A', 'Xã Vĩnh Lộc B'],
      },
      {
        name: 'Huyện Hóc Môn',
        wards: ['Thị trấn Hóc Môn', 'Xã Bà Điểm', 'Xã Đông Thạnh', 'Xã Nhị Bình', 'Xã Tân Hiệp', 'Xã Tân Thới Nhì', 'Xã Tân Xuân', 'Xã Thới Tam Thôn', 'Xã Trung Chánh', 'Xã Xuân Thới Đông'],
      },
    ],
  },
  {
    name: 'Bình Dương',
    districts: [
      {
        name: 'TP. Dĩ An (Khu ĐHQG TP.HCM)',
        wards: [
          'Phường Đông Hòa (KTX Khu B ĐHQG)',
          'Phường Dĩ An',
          'Phường An Bình',
          'Phường Bình An',
          'Phường Bình Thắng',
          'Phường Tân Bình',
          'Phường Tân Đông Hiệp',
        ],
      },
      {
        name: 'TP. Thủ Dầu Một',
        wards: ['Phường Phú Cường', 'Phường Hiệp Thành', 'Phường Phú Lợi', 'Phường Phú Hòa', 'Phường Phú Thọ', 'Phường Chánh Nghĩa', 'Phường Định Hòa', 'Phường Hòa Phú'],
      },
      {
        name: 'TP. Thuận An',
        wards: ['Phường Lái Thiêu', 'Phường An Phú', 'Phường Bình Chuẩn', 'Phường Bình Hòa', 'Phường Thuận Giao', 'Phường Vĩnh Phú'],
      },
      {
        name: 'TP. Tân Uyên',
        wards: ['Phường Uyên Hưng', 'Phường Tân Hiệp', 'Phường Khánh Bình', 'Phường Thái Hòa', 'Phường Tân Phước Khánh'],
      },
      {
        name: 'TP. Bến Cát',
        wards: ['Phường Mỹ Phước', 'Phường Chánh Phú Hòa', 'Phường Thới Hòa', 'Phường Hòa Lợi', 'Phường Tân Định'],
      },
    ],
  },
  {
    name: 'Hà Nội',
    districts: [
      {
        name: 'Quận Cầu Giấy',
        wards: ['Phường Dịch Vọng', 'Phường Dịch Vọng Hậu', 'Phường Mai Dịch', 'Phường Nghĩa Đô', 'Phường Nghĩa Tân', 'Phường Quan Hoa', 'Phường Trung Hòa', 'Phường Yên Hòa'],
      },
      {
        name: 'Quận Đống Đa',
        wards: ['Phường Cát Linh', 'Phường Láng Hạ', 'Phường Láng Thượng', 'Phường Ô Chợ Dừa', 'Phường Quang Trung', 'Phường Văn Miếu', 'Phường Kim Liên', 'Phường Phương Mai'],
      },
      {
        name: 'Quận Hai Bà Trưng',
        wards: ['Phường Bách Khoa', 'Phường Bạch Đằng', 'Phường Bạch Mai', 'Phường Đồng Tâm', 'Phường Lê Đại Hành', 'Phường Minh Khai', 'Phường Trương Định'],
      },
      {
        name: 'Quận Ba Đình',
        wards: ['Phường Cống Vị', 'Phường Điện Biên', 'Phường Đội Cấn', 'Phường Giảng Võ', 'Phường Kim Mã', 'Phường Liễu Giai', 'Phường Ngọc Hà', 'Phường Quán Thánh'],
      },
      {
        name: 'Quận Hoàn Kiếm',
        wards: ['Phường Hàng Bạc', 'Phường Hàng Bài', 'Phường Hàng Bồ', 'Phường Hàng Buồm', 'Phường Hàng Gai', 'Phường Tràng Tiền', 'Phường Lý Thái Tổ'],
      },
      {
        name: 'Quận Thanh Xuân',
        wards: ['Phường Hạ Đình', 'Phường Khương Đình', 'Phường Khương Mai', 'Phường Khương Trung', 'Phường Nhân Chính', 'Phường Thanh Xuân Bắc', 'Phường Thanh Xuân Trung'],
      },
      {
        name: 'Quận Nam Từ Liêm',
        wards: ['Phường Cầu Diễn', 'Phường Đại Mỗ', 'Phường Mễ Trì', 'Phường Mỹ Đình 1', 'Phường Mỹ Đình 2', 'Phường Phú Đô', 'Phường Tây Mỗ', 'Phường Trung Văn'],
      },
      {
        name: 'Quận Bắc Từ Liêm',
        wards: ['Phường Cổ Nhuế 1', 'Phường Cổ Nhuế 2', 'Phường Đông Ngạc', 'Phường Đức Thắng', 'Phường Minh Khai', 'Phường Phú Diễn', 'Phường Xuân Đỉnh'],
      },
    ],
  },
  {
    name: 'Đà Nẵng',
    districts: [
      {
        name: 'Quận Hải Châu',
        wards: ['Phường Hải Châu 1', 'Phường Hải Châu 2', 'Phường Thạch Thang', 'Phường Thanh Bình', 'Phường Thuận Phước', 'Phường Hòa Thuận Đông', 'Phường Hòa Cường Bắc'],
      },
      {
        name: 'Quận Thanh Khê',
        wards: ['Phường Vĩnh Trung', 'Phường Tân Chính', 'Phường Thạc Gián', 'Phường Chính Gián', 'Phường Tam Thuận', 'Phường Xuân Hà', 'Phường An Khê'],
      },
      {
        name: 'Quận Sơn Trà',
        wards: ['Phường An Hải Bắc', 'Phường An Hải Đông', 'Phường An Hải Tây', 'Phường Phước Mỹ', 'Phường Mân Thái', 'Phường Thọ Quang'],
      },
      {
        name: 'Quận Ngũ Hành Sơn',
        wards: ['Phường Mỹ An', 'Phường Khuê Mỹ', 'Phường Hoà Hải', 'Phường Hoà Quý'],
      },
      {
        name: 'Quận Liên Chiểu',
        wards: ['Phường Hòa Khánh Bắc', 'Phường Hòa Khánh Nam', 'Phường Hòa Minh', 'Phường Hòa Hiệp Bắc', 'Phường Hòa Hiệp Nam'],
      },
    ],
  },
  {
    name: 'Đồng Nai',
    districts: [
      {
        name: 'TP. Biên Hòa',
        wards: ['Phường Trảng Dài', 'Phường Tân Phong', 'Phường Tân Hiệp', 'Phường Hố Nai', 'Phường Tam Hiệp', 'Phường Quyết Thắng', 'Phường Thống Nhất', 'Phường Long Bình'],
      },
      {
        name: 'Huyện Long Thành',
        wards: ['Thị trấn Long Thành', 'Xã An Phước', 'Xã Bình An', 'Xã Bình Sơn', 'Xã Lộc An', 'Xã Tam An'],
      },
      {
        name: 'Huyện Nhơn Trạch',
        wards: ['Thị trấn Hiệp Phước', 'Xã Đại Phước', 'Xã Phú Hữu', 'Xã Phú Thạnh', 'Xã Phước Thiền'],
      },
    ],
  },
  {
    name: 'Cần Thơ',
    districts: [
      {
        name: 'Quận Ninh Kiều',
        wards: ['Phường An Cư', 'Phường An Hòa', 'Phường An Khánh', 'Phường An Nghiệp', 'Phường Cái Khế', 'Phường Hưng Lợi', 'Phường Tân An', 'Phường Xuân Khánh'],
      },
      {
        name: 'Quận Cái Răng',
        wards: ['Phường Ba Láng', 'Phường Hưng Phú', 'Phường Hưng Thạnh', 'Phường Lê Bình', 'Phường Phú Thứ'],
      },
      {
        name: 'Quận Bình Thủy',
        wards: ['Phường An Thới', 'Phường Bình Thủy', 'Phường Bùi Hữu Nghĩa', 'Phường Trà An', 'Phường Trà Nóc'],
      },
    ],
  },
  {
    name: 'Hải Phòng',
    districts: [
      {
        name: 'Quận Hồng Bàng',
        wards: ['Phường Hoàng Văn Thụ', 'Phường Minh Khai', 'Phường Phan Bội Châu', 'Phường Quán Toan', 'Phường Sở Dầu', 'Phường Thượng Lý'],
      },
      {
        name: 'Quận Ngô Quyền',
        wards: ['Phường Cầu Đất', 'Phường Cầu Tre', 'Phường Đằng Giang', 'Phường Đông Khê', 'Phường Lạch Tray', 'Phường Lương Khánh Thiện'],
      },
      {
        name: 'Quận Lê Chân',
        wards: ['Phường An Biên', 'Phường An Dương', 'Phường Dư Hàng', 'Phường Hàng Kênh', 'Phường Kênh Dương', 'Phường Vĩnh Niệm'],
      },
    ],
  },
  {
    name: 'Bà Rịa - Vũng Tàu',
    districts: [
      {
        name: 'TP. Vũng Tàu',
        wards: ['Phường 1', 'Phường 2', 'Phường 3', 'Phường 4', 'Phường 7', 'Phường 8', 'Phường 9', 'Phường 10', 'Phường Thắng Nhất', 'Phường Thắng Nhì'],
      },
      {
        name: 'TP. Bà Rịa',
        wards: ['Phường Phước Hưng', 'Phường Phước Hiệp', 'Phường Phước Nguyên', 'Phường Long Toàn', 'Phường Long Tâm', 'Phường Kim Dinh'],
      },
      {
        name: 'TX. Phú Mỹ',
        wards: ['Phường Phú Mỹ', 'Phường Hắc Dịch', 'Phường Mỹ Xuân', 'Phường Phước Hòa', 'Phường Tân Phước'],
      },
    ],
  },
  {
    name: 'Thừa Thiên Huế',
    districts: [
      {
        name: 'TP. Huế',
        wards: ['Phường Phú Hội', 'Phường Phú Nhuận', 'Phường Vĩnh Ninh', 'Phường Vỹ Dạ', 'Phường Thuận Hòa', 'Phường Thuận Thành', 'Phường Tây Lộc', 'Phường Hương Sơ'],
      },
      {
        name: 'TX. Hương Thủy',
        wards: ['Phường Phú Bài', 'Phường Thủy Châu', 'Phường Thủy Dương', 'Phường Thủy Lương', 'Phường Thủy Phương'],
      },
    ],
  },
  {
    name: 'Khánh Hòa',
    districts: [
      {
        name: 'TP. Nha Trang',
        wards: ['Phường Lộc Thọ', 'Phường Phước Tiến', 'Phường Tân Lập', 'Phường Vĩnh Hải', 'Phường Vĩnh Phước', 'Phường Vĩnh Nguyên', 'Phường Phước Long'],
      },
      {
        name: 'TP. Cam Ranh',
        wards: ['Phường Cam Linh', 'Phường Cam Lộc', 'Phường Cam Lợi', 'Phường Cam Nghĩa', 'Phường Cam Phú', 'Phường Ba Ngòi'],
      },
    ],
  },
  {
    name: 'Lâm Đồng',
    districts: [
      {
        name: 'TP. Đà Lạt',
        wards: ['Phường 1', 'Phường 2', 'Phường 3', 'Phường 4', 'Phường 5', 'Phường 6', 'Phường 7', 'Phường 8', 'Phường 9', 'Phường 10'],
      },
      {
        name: 'TP. Bảo Lộc',
        wards: ['Phường 1', 'Phường 2', 'Phường B’Lao', 'Phường Lộc Phát', 'Phường Lộc Sơn', 'Phường Lộc Tiến'],
      },
    ],
  },
  {
    name: 'Quảng Nam',
    districts: [
      {
        name: 'TP. Tam Kỳ',
        wards: ['Phường An Mỹ', 'Phường An Sơn', 'Phường An Xuân', 'Phường Hòa Hương', 'Phường Phước Hòa', 'Phường Tân Thạnh'],
      },
      {
        name: 'TP. Hội An',
        wards: ['Phường Cẩm Châu', 'Phường Cẩm Nam', 'Phường Cẩm Phô', 'Phường Minh An', 'Phường Sơn Phong', 'Phường Tân An'],
      },
    ],
  },
  {
    name: 'An Giang',
    districts: [
      { name: 'TP. Long Xuyên', wards: ['Phường Mỹ Bình', 'Phường Mỹ Long', 'Phường Mỹ Xuyên', 'Phường Đông Xuyên', 'Phường Bình Khánh'] },
      { name: 'TP. Châu Đốc', wards: ['Phường Châu Phú A', 'Phường Châu Phú B', 'Phường Vĩnh Mỹ', 'Phường Núi Sam'] },
    ],
  },
  {
    name: 'Bắc Ninh',
    districts: [
      { name: 'TP. Bắc Ninh', wards: ['Phường Suối Hoa', 'Phường Tiền An', 'Phường Ninh Xá', 'Phường Vệ An', 'Phường Đại Phúc', 'Phường Võ Cường'] },
      { name: 'TX. Từ Sơn', wards: ['Phường Đông Ngàn', 'Phường Đồng Kỵ', 'Phường Trang Hạ', 'Phường Tân Hồng', 'Phường Phù Chẩn'] },
    ],
  },
  {
    name: 'Bắc Giang',
    districts: [
      { name: 'TP. Bắc Giang', wards: ['Phường Hoàng Văn Thụ', 'Phường Lê Lợi', 'Phường Ngô Quyền', 'Phường Trần Nguyên Hãn', 'Phường Dĩnh Kế'] },
      { name: 'TX. Việt Yên', wards: ['Phường Bích Động', 'Phường Nếnh', 'Phường Tự Lạn', 'Phường Hồng Thái'] },
    ],
  },
  {
    name: 'Bến Tre',
    districts: [
      { name: 'TP. Bến Tre', wards: ['Phường An Hội', 'Phường 4', 'Phường 5', 'Phường 6', 'Phường 7', 'Phường 8', 'Phường Phú Khương'] },
      { name: 'Huyện Châu Thành', wards: ['Thị trấn Châu Thành', 'Xã Tân Thạch', 'Xã Quới Sơn', 'Xã An Khánh'] },
    ],
  },
  {
    name: 'Bình Định',
    districts: [
      { name: 'TP. Quy Nhơn', wards: ['Phường Lê Lợi', 'Phường Trần Phú', 'Phường Ngô Mây', 'Phường Nguyễn Văn Cừ', 'Phường Ghềnh Ráng'] },
      { name: 'TX. An Nhơn', wards: ['Phường Bình Định', 'Phường Đập Đá', 'Phường Nhơn Hưng'] },
    ],
  },
  {
    name: 'Bình Phước',
    districts: [
      { name: 'TP. Đồng Xoài', wards: ['Phường Tân Phú', 'Phường Tân Bình', 'Phường Tân Xuân', 'Phường Tân Đồng', 'Phường Tiến Thành'] },
      { name: 'TX. Chơn Thành', wards: ['Phường Hưng Long', 'Phường Thành Tâm', 'Phường Minh Hưng'] },
    ],
  },
  {
    name: 'Bình Thuận',
    districts: [
      { name: 'TP. Phan Thiết', wards: ['Phường Đức Nghĩa', 'Phường Lạc Đạo', 'Phường Phú Thủy', 'Phường Phú Trinh', 'Phường Xuân An', 'Phường Hàm Tiến'] },
      { name: 'TX. La Gi', wards: ['Phường Phước Hội', 'Phường Phước Lộc', 'Phường Tân An'] },
    ],
  },
  {
    name: 'Cà Mau',
    districts: [
      { name: 'TP. Cà Mau', wards: ['Phường 1', 'Phường 2', 'Phường 4', 'Phường 5', 'Phường 6', 'Phường 7', 'Phường 8', 'Phường 9', 'Phường Tân Xuyên'] },
    ],
  },
  {
    name: 'Đắk Lắk',
    districts: [
      { name: 'TP. Buôn Ma Thuột', wards: ['Phường Thắng Lợi', 'Phường Thống Nhất', 'Phường Tân Lợi', 'Phường Tân Lập', 'Phường Tự An', 'Phường Ea Tam'] },
      { name: 'TX. Buôn Hồ', wards: ['Phường An Lạc', 'Phường An Bình', 'Phường Thiện An'] },
    ],
  },
  {
    name: 'Gia Lai',
    districts: [
      { name: 'TP. Pleiku', wards: ['Phường Diên Hồng', 'Phường Hoa Lư', 'Phường Hội Thương', 'Phường Hội Phú', 'Phường Phù Đổng', 'Phường Yên Đỗ'] },
    ],
  },
  {
    name: 'Hà Tĩnh',
    districts: [
      { name: 'TP. Hà Tĩnh', wards: ['Phường Bắc Hà', 'Phường Nam Hà', 'Phường Trần Phú', 'Phường Hà Huy Tập', 'Phường Đại Nài'] },
    ],
  },
  {
    name: 'Hải Dương',
    districts: [
      { name: 'TP. Hải Dương', wards: ['Phường Trần Phú', 'Phường Quang Trung', 'Phường Lê Thanh Nghị', 'Phường Hải Tân', 'Phường Nguyễn Trãi'] },
    ],
  },
  {
    name: 'Hậu Giang',
    districts: [
      { name: 'TP. Vị Thanh', wards: ['Phường 1', 'Phường 3', 'Phường 4', 'Phường 5', 'Phường 7'] },
    ],
  },
  {
    name: 'Hưng Yên',
    districts: [
      { name: 'TP. Hưng Yên', wards: ['Phường Hiến Nam', 'Phường Lê Lợi', 'Phường Minh Khai', 'Phường Quang Trung', 'Phường Lam Sơn'] },
      { name: 'TX. Mỹ Hào', wards: ['Phường Bần Yên Nhân', 'Phường Phan Đình Phùng', 'Phường Dị Sử'] },
    ],
  },
  {
    name: 'Kiên Giang',
    districts: [
      { name: 'TP. Rạch Giá', wards: ['Phường Vĩnh Thanh', 'Phường Vĩnh Lạc', 'Phường Vĩnh Bảo', 'Phường An Hòa', 'Phường Rạch Sỏi'] },
      { name: 'TP. Phú Quốc', wards: ['Phường Dương Đông', 'Phường An Thới', 'Xã Cửa Dương', 'Xã Gành Dầu', 'Xã Hàm Ninh'] },
    ],
  },
  {
    name: 'Long An',
    districts: [
      { name: 'TP. Tân An', wards: ['Phường 1', 'Phường 2', 'Phường 3', 'Phường 4', 'Phường 5', 'Phường 6', 'Phường 7', 'Phường Tân Khánh'] },
      { name: 'TX. Kiến Tường', wards: ['Phường 1', 'Phường 2', 'Phường 3'] },
    ],
  },
  {
    name: 'Nam Định',
    districts: [
      { name: 'TP. Nam Định', wards: ['Phường Vị Xuyên', 'Phường Trần Tế Xương', 'Phường Quang Trung', 'Phường Lộc Vượng', 'Phường Cửa Bắc'] },
    ],
  },
  {
    name: 'Nghệ An',
    districts: [
      { name: 'TP. Vinh', wards: ['Phường Lê Lợi', 'Phường Quang Trung', 'Phường Hưng Dũng', 'Phường Bến Thủy', 'Phường Trường Thi', 'Phường Cửa Nam'] },
      { name: 'TX. Cửa Lò', wards: ['Phường Nghi Hương', 'Phường Nghi Thu', 'Phường Thu Thủy'] },
    ],
  },
  {
    name: 'Ninh Bình',
    districts: [
      { name: 'TP. Ninh Bình', wards: ['Phường Vân Giang', 'Phường Đông Thành', 'Phường Nam Thành', 'Phường Tân Thành', 'Phường Phúc Thành'] },
      { name: 'TP. Tam Điệp', wards: ['Phường Bắc Sơn', 'Phường Trung Sơn', 'Phường Nam Sơn'] },
    ],
  },
  {
    name: 'Phú Thọ',
    districts: [
      { name: 'TP. Việt Trì', wards: ['Phường Gia Cẩm', 'Phường Tiên Cát', 'Phường Nông Trang', 'Phường Tân Dân', 'Phường Vân Cơ'] },
    ],
  },
  {
    name: 'Quảng Ninh',
    districts: [
      { name: 'TP. Hạ Long', wards: ['Phường Bãi Cháy', 'Phường Hồng Gai', 'Phường Bạch Đằng', 'Phường Cao Thắng', 'Phường Hà Khẩu', 'Phường Tuần Châu'] },
      { name: 'TP. Cẩm Phả', wards: ['Phường Cẩm Trung', 'Phường Cẩm Thành', 'Phường Cẩm Phả'] },
      { name: 'TP. Uông Bí', wards: ['Phường Quang Trung', 'Phường Thanh Sơn', 'Phường Yên Thanh'] },
      { name: 'TP. Móng Cái', wards: ['Phường Trần Phú', 'Phường Ka Long', 'Phường Ninh Dương'] },
    ],
  },
  {
    name: 'Quảng Trị',
    districts: [
      { name: 'TP. Đông Hà', wards: ['Phường 1', 'Phường 2', 'Phường 3', 'Phường 5', 'Phường Đông Lương', 'Phường Đông Lễ'] },
    ],
  },
  {
    name: 'Sóc Trăng',
    districts: [
      { name: 'TP. Sóc Trăng', wards: ['Phường 1', 'Phường 2', 'Phường 3', 'Phường 4', 'Phường 6', 'Phường 8', 'Phường 10'] },
    ],
  },
  {
    name: 'Tây Ninh',
    districts: [
      { name: 'TP. Tây Ninh', wards: ['Phường 1', 'Phường 2', 'Phường 3', 'Phường Ninh Sơn', 'Phường Hiệp Ninh'] },
      { name: 'TX. Trảng Bàng', wards: ['Phường Trảng Bàng', 'Phường An Hòa', 'Phường Gia Lộc'] },
    ],
  },
  {
    name: 'Thái Bình',
    districts: [
      { name: 'TP. Thái Bình', wards: ['Phường Bồ Xuyên', 'Phường Đề Thám', 'Phường Lê Hồng Phong', 'Phường Kỳ Bá', 'Phường Quang Trung'] },
    ],
  },
  {
    name: 'Thái Nguyên',
    districts: [
      { name: 'TP. Thái Nguyên', wards: ['Phường Phan Đình Phùng', 'Phường Hoàng Văn Thụ', 'Phường Đồng Quang', 'Phường Tân Lập', 'Phường Quang Trung'] },
      { name: 'TP. Sông Công', wards: ['Phường Cải Đan', 'Phường Thắng Lợi', 'Phường Bách Quang'] },
    ],
  },
  {
    name: 'Thanh Hóa',
    districts: [
      { name: 'TP. Thanh Hóa', wards: ['Phường Ba Đình', 'Phường Điện Biên', 'Phường Lam Sơn', 'Phường Ngọc Trạo', 'Phường Đông Thọ', 'Phường Trường Thi'] },
      { name: 'TP. Sầm Sơn', wards: ['Phường Bắc Sơn', 'Phường Trung Sơn', 'Phường Trường Sơn'] },
    ],
  },
  {
    name: 'Tiền Giang',
    districts: [
      { name: 'TP. Mỹ Tho', wards: ['Phường 1', 'Phường 2', 'Phường 3', 'Phường 4', 'Phường 5', 'Phường 6', 'Phường 7', 'Phường Tân Long'] },
      { name: 'TX. Gò Công', wards: ['Phường 1', 'Phường 2', 'Phường 3', 'Phường 4'] },
    ],
  },
  {
    name: 'Vĩnh Long',
    districts: [
      { name: 'TP. Vĩnh Long', wards: ['Phường 1', 'Phường 2', 'Phường 3', 'Phường 4', 'Phường 5', 'Phường 8', 'Phường 9'] },
    ],
  },
  {
    name: 'Vĩnh Phúc',
    districts: [
      { name: 'TP. Vĩnh Yên', wards: ['Phường Ngô Quyền', 'Phường Đống Đa', 'Phường Tích Sơn', 'Phường Liên Bảo', 'Phường Khai Quang'] },
      { name: 'TP. Phúc Yên', wards: ['Phường Trưng Trắc', 'Phường Hùng Vương', 'Phường Nam Viêm'] },
    ],
  },
  {
    name: 'Yên Bái',
    districts: [
      { name: 'TP. Yên Bái', wards: ['Phường Đồng Tâm', 'Phường Minh Tân', 'Phường Hồng Hà', 'Phường Yên Ninh', 'Phường Nam Cường'] },
    ],
  },
  {
    name: 'Lạng Sơn',
    districts: [
      { name: 'TP. Lạng Sơn', wards: ['Phường Hoàng Văn Thụ', 'Phường Tam Thanh', 'Phường Vĩnh Trại', 'Phường Chi Lăng', 'Phường Đông Kinh'] },
    ],
  },
  {
    name: 'Lào Cai',
    districts: [
      { name: 'TP. Lào Cai', wards: ['Phường Kim Tân', 'Phường Cốc Lếu', 'Phường Bắc Cường', 'Phường Duyên Hải', 'Phường Nam Cường'] },
      { name: 'TX. Sa Pa', wards: ['Phường Sa Pa', 'Phường Sa Pả', 'Phường Cầu Mây', 'Phường Hàm Rồng'] },
    ],
  },
  {
    name: 'Tuyên Quang',
    districts: [
      { name: 'TP. Tuyên Quang', wards: ['Phường Tân Quang', 'Phường Phan Thiết', 'Phường Minh Xuân', 'Phường Nông Tiến', 'Phường Ỷ La'] },
    ],
  },
  {
    name: 'Sơn La',
    districts: [
      { name: 'TP. Sơn La', wards: ['Phường Chiềng Lề', 'Phường Tô Hiệu', 'Phường Quyết Thắng', 'Phường Quyết Tâm', 'Phường Chiềng Cơi'] },
    ],
  },
  {
    name: 'Điện Biên',
    districts: [
      { name: 'TP. Điện Biên Phủ', wards: ['Phường Mường Thanh', 'Phường Tân Thanh', 'Phường Him Lam', 'Phường Thanh Bình', 'Phường Nam Thanh'] },
    ],
  },
  {
    name: 'Lai Châu',
    districts: [
      { name: 'TP. Lai Châu', wards: ['Phường Quyết Thắng', 'Phường Tân Phong', 'Phường Đoàn Kết', 'Phường Quyết Tiến', 'Phường Đông Phong'] },
    ],
  },
  {
    name: 'Hòa Bình',
    districts: [
      { name: 'TP. Hòa Bình', wards: ['Phường Phương Lâm', 'Phường Đồng Tiến', 'Phường Tân Thịnh', 'Phường Thịnh Lang', 'Phường Hữu Nghị'] },
    ],
  },
  {
    name: 'Ninh Thuận',
    districts: [
      { name: 'TP. Phan Rang - Tháp Chàm', wards: ['Phường Kinh Dinh', 'Phường Thanh Sơn', 'Phường Phủ Hà', 'Phường Mỹ Hương', 'Phường Đô Vinh'] },
    ],
  },
  {
    name: 'Phú Yên',
    districts: [
      { name: 'TP. Tuy Hòa', wards: ['Phường 1', 'Phường 2', 'Phường 3', 'Phường 4', 'Phường 5', 'Phường 7', 'Phường 9', 'Phường Phú Lâm'] },
      { name: 'TX. Sông Cầu', wards: ['Phường Xuân Phú', 'Phường Xuân Thành', 'Phường Xuân Yên'] },
    ],
  },
  {
    name: 'Quảng Bình',
    districts: [
      { name: 'TP. Đồng Hới', wards: ['Phường Đồng Mỹ', 'Phường Hải Đình', 'Phường Đồng Phú', 'Phường Bắc Lý', 'Phường Nam Lý'] },
    ],
  },
  {
    name: 'Quảng Ngãi',
    districts: [
      { name: 'TP. Quảng Ngãi', wards: ['Phường Lê Hồng Phong', 'Phường Trần Hưng Đạo', 'Phường Nguyễn Nghiêm', 'Phường Trần Phú', 'Phường Chánh Lộ'] },
    ],
  },
  {
    name: 'Trà Vinh',
    districts: [
      { name: 'TP. Trà Vinh', wards: ['Phường 1', 'Phường 2', 'Phường 3', 'Phường 4', 'Phường 5', 'Phường 6', 'Phường 7', 'Phường 8', 'Phường 9'] },
    ],
  },
  {
    name: 'Đồng Tháp',
    districts: [
      { name: 'TP. Cao Lãnh', wards: ['Phường 1', 'Phường 2', 'Phường 3', 'Phường 4', 'Phường 6', 'Phường 11', 'Phường Mỹ Phú'] },
      { name: 'TP. Sa Đéc', wards: ['Phường 1', 'Phường 2', 'Phường 3', 'Phường 4', 'Phường An Hòa', 'Phường Tân Quy Đông'] },
    ],
  },
  {
    name: 'Bạc Liêu',
    districts: [
      { name: 'TP. Bạc Liêu', wards: ['Phường 1', 'Phường 2', 'Phường 3', 'Phường 5', 'Phường 7', 'Phường 8', 'Phường Nhà Mát'] },
    ],
  },
  {
    name: 'Hà Nam',
    districts: [
      { name: 'TP. Phủ Lý', wards: ['Phường Minh Khai', 'Phường Lương Khánh Thiện', 'Phường Hai Bà Trưng', 'Phường Trần Hưng Đạo', 'Phường Lê Hồng Phong'] },
    ],
  },
  {
    name: 'Cao Bằng',
    districts: [
      { name: 'TP. Cao Bằng', wards: ['Phường Hợp Giang', 'Phường Sông Bằng', 'Phường Tân Giang', 'Phường Sông Hiến', 'Phường Đề Thám'] },
    ],
  },
  {
    name: 'Bắc Kạn',
    districts: [
      { name: 'TP. Bắc Kạn', wards: ['Phường Đức Xuân', 'Phường Sông Cầu', 'Phường Phùng Chí Kiên', 'Phường Nguyễn Thị Minh Khai'] },
    ],
  },
  {
    name: 'Hà Giang',
    districts: [
      { name: 'TP. Hà Giang', wards: ['Phường Trần Phú', 'Phường Minh Khai', 'Phường Nguyễn Trãi', 'Phường Quang Trung', 'Phường Ngọc Hà'] },
    ],
  },
  {
    name: 'Kon Tum',
    districts: [
      { name: 'TP. Kon Tum', wards: ['Phường Quyết Thắng', 'Phường Thắng Lợi', 'Phường Quang Trung', 'Phường Duy Tân', 'Phường Trần Hưng Đạo'] },
    ],
  },
  {
    name: 'Đắk Nông',
    districts: [
      { name: 'TP. Gia Nghĩa', wards: ['Phường Nghĩa Đức', 'Phường Nghĩa Thành', 'Phường Nghĩa Phú', 'Phường Nghĩa Tân', 'Phường Nghĩa Trung'] },
    ],
  },
];

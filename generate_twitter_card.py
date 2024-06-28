## サイトトップ OGP 生成スクリプト
## 各開催記録の OGP をタイル状に結合する
import cv2
import numpy as np

IMAGE_TILE = [
    [
        './public/static/images/rose/rose-12.jpg',
        './public/static/images/hydrangea/hydrangea-1.jpg',
        './public/static/images/morning-glory/morning-glory-13.jpg',
        './public/static/images/hurricane-lily/hurricane-lily-36.jpg',
        './public/static/images/cosmos/cosmos-15.jpg',
        './public/static/images/metasequoia/metasequoia-36.jpg'
    ],
    [
        './public/static/images/sasanqua/sasanqua-18.jpg',
        './public/static/images/daffo-win/daffo-win-20.jpg',
        './public/static/images/plum/plum-24.jpg',
        './public/static/images/sakura-tulip-canola-flower/sakura-tulip-canola-flower-12.jpg',
        './public/static/images/nemophila/nemophila-12.jpg',
        './public/static/images/poppy/poppy-31.jpg'
    ],
    [
        './public/static/images/germany/germany-37.jpg',
        './public/static/images/azalea/azalea-65.jpg',
        './public/static/images/wisteria/wisteria-114.jpg'
    ]
]

LOGO_CARD_IMAGE_PATH = './public/static/images/logo_text.png'

image_grid = []

for row in IMAGE_TILE:
    image_list = []
    
    for image_path in row:
        image_list.append(cv2.imread(image_path))
        
    image_grid.append(image_list)

def hconcat_resize(image_list, interpolation=cv2.INTER_CUBIC, h_min=227):
    image_list_resize = [
        cv2.resize(image, (int(image.shape[1] * h_min / image.shape[0]), h_min), interpolation=interpolation)
        for image in image_list
    ]

    return cv2.hconcat(image_list_resize)

def vconcat_resize(image_list, interpolation=cv2.INTER_CUBIC, w_min=2000):
    image_list_resize = [
        cv2.resize(image, (w_min, int(image.shape[0] * w_min / image.shape[1])), interpolation=interpolation)
        for image in image_list
    ]

    return cv2.vconcat(image_list_resize)

result_image = vconcat_resize(
    [
        hconcat_resize(image_grid[0]),
        hconcat_resize(image_grid[1]),
        hconcat_resize(image_grid[2])
    ]
)

logo_card_image = cv2.imread(LOGO_CARD_IMAGE_PATH)

logo_width = result_image.shape[1] // 32 * 31
logo_height = result_image.shape[0] // 8 * 3
margin_width = (result_image.shape[1] - logo_width) // 2
margin_height = (result_image.shape[0] - logo_height) // 2

logo_card_image = cv2.resize(logo_card_image, (logo_width, logo_height), interpolation=cv2.INTER_CUBIC)

x1, y1, x2, y2 = margin_width, margin_height, margin_width + logo_width, margin_height + logo_height
alpha = 0.7

result_image[y1:y2, x1:x2] = result_image[y1:y2, x1:x2] * (1 - alpha) + \
    logo_card_image[y1-margin_height:y2-margin_height, x1-margin_width:x2-margin_width] * alpha
    

cv2.imwrite('./twitter_card_result.jpg', result_image)
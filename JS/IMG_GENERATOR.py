import random, sys, os
from captcha.image import ImageCaptcha


RND_1 = random.randint(0, 9)
RND_2 = random.randint(0, 9)
IMG = ImageCaptcha(width = 230, height = 70)
FOUR_MATH = ["+", "-", "×"]
MATH_RND_COUNT = random.randint(0, 2)
CAPTCHA_TEXT = f"{RND_1} {FOUR_MATH[MATH_RND_COUNT]} {RND_2} = ?"

IMG_TITLE = "RND_1_IMG.png"

# print(IMG_TITLE.split('_')[1])

IMG_LIST_CHECK = os.path.exists(f".\\RANDOM_IMG_LIST\\{IMG_TITLE}")
if IMG_LIST_CHECK:
    IMG_TITLE = f"RND_{int(IMG_TITLE.split('_')[1]) + 1}_IMG.png"
    IMG.write(CAPTCHA_TEXT, f".\\RANDOM_IMG_LIST\\{IMG_TITLE}")
else:
    IMG.write(CAPTCHA_TEXT, f".\\RANDOM_IMG_LIST\\{IMG_TITLE}")

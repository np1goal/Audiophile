import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { }

  product = ''
  productInfo: any = {}
  productDatas: any = [
    { 
      productName: 'xx99-mark-2-headphones', 
      productImages: ['../../../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg', '../../../assets/product-xx99-mark-two-headphones/tablet/image-product.jpg', '../../../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg'],
      newProduct: true, 
      name: 'XX99 Mark II', 
      type: 'HEADPHONES', 
      description: 'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.', 
      price: '2,999', 
      featuresDescription: 'Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat. The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.', 
      inTheBox: [ ['1x', 'Headphone Unit'], ['2x', 'Replacement Earcups'], ['1x', 'User Manual'], ['1x', '3.5mm 5m Audio Cable'], ['1x', 'Travel Bag']  ],
      imageGallery1: ['../../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg', '../../../assets/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg', '../../../assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg'],
      imageGallery2: ['../../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg', '../../../assets/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg', '../../../assets/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg'],
      imageGallery3: ['../../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg', '../../../assets/product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg', '../../../assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg'],
      youMayAlsoLike: [
        {
          images: ['../../../assets/product-xx99-mark-one-headphones/desktop/image-product.jpg', '../../../assets/product-xx99-mark-one-headphones/tablet/image-product.jpg', '../../../assets/product-xx99-mark-one-headphones/mobile/image-product.jpg'],
          title: 'XX99 MARK I',
          url: ''
        },
        {
          images: ['../../../assets/product-xx59-headphones/desktop/image-product.jpg', '../../../assets/product-xx59-headphones/tablet/image-product.jpg', '../../../assets/product-xx59-headphones/mobile/image-product.jpg'],
          title: 'XX59',
          url: ''
        },
        {
          images: ['../../../assets/product-zx9-speaker/desktop/image-product.jpg', '../../../assets/product-zx9-speaker/tablet/image-product.jpg', '../../../assets/product-zx9-speaker/mobile/image-product.jpg'],
          title: 'ZX9 SPEAKER',
          url: ''
        }
      ]
    },
    { 
      productName: 'yx1-earphones', 
      productImages: ['../../../assets/product-yx1-earphones/desktop/image-product.jpg', '../../../assets/product-yx1-earphones/tablet/image-product.jpg', '../../../assets/product-yx1-earphones/mobile/image-product.jpg'],
      newProduct: true, 
      name: 'YX1 WIRELESS', 
      type: 'EARPHONES', 
      description: 'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.', 
      price: '2,999', 
      featuresDescription: 'Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound. The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.', 
      inTheBox: [ ['2x', 'Earphone Unit'], ['6x', 'Multi-size Earplugs'], ['1x', 'User Manual'], ['1x', 'USB-C Charging Cable'], ['1x', 'Travel Pouch']  ],
      imageGallery1: ['../../../assets/product-yx1-earphones/desktop/image-gallery-1.jpg', '../../../assets/product-yx1-earphones/tablet/image-gallery-1.jpg', '../../../assets/product-yx1-earphones/mobile/image-gallery-1.jpg'],
      imageGallery2: ['../../../assets/product-yx1-earphones/desktop/image-gallery-2.jpg', '../../../assets/product-yx1-earphones/tablet/image-gallery-2.jpg', '../../../assets/product-yx1-earphones/mobile/image-gallery-2.jpg'],
      imageGallery3: ['../../../assets/product-yx1-earphones/desktop/image-gallery-3.jpg', '../../../assets/product-yx1-earphones/tablet/image-gallery-3.jpg', '../../../assets/product-yx1-earphones/mobile/image-gallery-3.jpg'],
      youMayAlsoLike: [
        {
          images: ['../../../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg', '../../../assets/product-xx99-mark-two-headphones/tablet/image-product.jpg', '../../../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg'],
          title: 'XX99 MARK I',
          url: ''
        },
        {
          images: ['../../../assets/product-xx59-headphones/desktop/image-product.jpg', '../../../assets/product-xx59-headphones/tablet/image-product.jpg', '../../../assets/product-xx59-headphones/mobile/image-product.jpg'],
          title: 'XX59',
          url: ''
        },
        {
          images: ['../../../assets/product-zx9-speaker/desktop/image-product.jpg', '../../../assets/product-zx9-speaker/tablet/image-product.jpg', '../../../assets/product-zx9-speaker/mobile/image-product.jpg'],
          title: 'ZX9 SPEAKER',
          url: ''
        }
      ]
    },
    { 
      productName: 'yx1-earphones', 
      productImages: ['../../../assets/product-yx1-earphones/desktop/image-product.jpg', '../../../assets/product-yx1-earphones/tablet/image-product.jpg', '../../../assets/product-yx1-earphones/mobile/image-product.jpg'],
      newProduct: true, 
      name: 'YX1 WIRELESS', 
      type: 'EARPHONES', 
      description: 'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.', 
      price: '599', 
      featuresDescription: 'Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound. The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.', 
      inTheBox: [ ['2x', 'Earphone Unit'], ['6x', 'Multi-size Earplugs'], ['1x', 'User Manual'], ['1x', 'USB-C Charging Cable'], ['1x', 'Travel Pouch']  ],
      imageGallery1: ['../../../assets/product-yx1-earphones/desktop/image-gallery-1.jpg', '../../../assets/product-yx1-earphones/tablet/image-gallery-1.jpg', '../../../assets/product-yx1-earphones/mobile/image-gallery-1.jpg'],
      imageGallery2: ['../../../assets/product-yx1-earphones/desktop/image-gallery-2.jpg', '../../../assets/product-yx1-earphones/tablet/image-gallery-2.jpg', '../../../assets/product-yx1-earphones/mobile/image-gallery-2.jpg'],
      imageGallery3: ['../../../assets/product-yx1-earphones/desktop/image-gallery-3.jpg', '../../../assets/product-yx1-earphones/tablet/image-gallery-3.jpg', '../../../assets/product-yx1-earphones/mobile/image-gallery-3.jpg'],
      youMayAlsoLike: [
        {
          images: ['../../../assets/product-xx99-mark-one-headphones/desktop/image-product.jpg', '../../../assets/product-xx99-mark-one-headphones/tablet/image-product.jpg', '../../../assets/product-xx99-mark-one-headphones/mobile/image-product.jpg'],
          title: 'XX99 MARK I',
          url: ''
        },
        {
          images: ['../../../assets/product-xx59-headphones/desktop/image-product.jpg', '../../../assets/product-xx59-headphones/tablet/image-product.jpg', '../../../assets/product-xx59-headphones/mobile/image-product.jpg'],
          title: 'XX59',
          url: ''
        },
        {
          images: ['../../../assets/product-zx9-speaker/desktop/image-product.jpg', '../../../assets/product-zx9-speaker/tablet/image-product.jpg', '../../../assets/product-zx9-speaker/mobile/image-product.jpg'],
          title: 'ZX9 SPEAKER',
          url: ''
        }
      ]
    },
    { 
      productName: 'yx1-earphones', 
      productImages: ['../../../assets/product-yx1-earphones/desktop/image-product.jpg', '../../../assets/product-yx1-earphones/tablet/image-product.jpg', '../../../assets/product-yx1-earphones/mobile/image-product.jpg'],
      newProduct: true, 
      name: 'YX1 WIRELESS', 
      type: 'EARPHONES', 
      description: 'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.', 
      price: '2,999', 
      featuresDescription: 'Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound. The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.', 
      inTheBox: [ ['2x', 'Earphone Unit'], ['6x', 'Multi-size Earplugs'], ['1x', 'User Manual'], ['1x', 'USB-C Charging Cable'], ['1x', 'Travel Pouch']  ],
      imageGallery1: ['../../../assets/product-yx1-earphones/desktop/image-gallery-1.jpg', '../../../assets/product-yx1-earphones/tablet/image-gallery-1.jpg', '../../../assets/product-yx1-earphones/mobile/image-gallery-1.jpg'],
      imageGallery2: ['../../../assets/product-yx1-earphones/desktop/image-gallery-2.jpg', '../../../assets/product-yx1-earphones/tablet/image-gallery-2.jpg', '../../../assets/product-yx1-earphones/mobile/image-gallery-2.jpg'],
      imageGallery3: ['../../../assets/product-yx1-earphones/desktop/image-gallery-3.jpg', '../../../assets/product-yx1-earphones/tablet/image-gallery-3.jpg', '../../../assets/product-yx1-earphones/mobile/image-gallery-3.jpg'],
      youMayAlsoLike: [
        {
          images: ['../../../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg', '../../../assets/product-xx99-mark-two-headphones/tablet/image-product.jpg', '../../../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg'],
          title: 'XX99 MARK I',
          url: ''
        },
        {
          images: ['../../../assets/product-xx59-headphones/desktop/image-product.jpg', '../../../assets/product-xx59-headphones/tablet/image-product.jpg', '../../../assets/product-xx59-headphones/mobile/image-product.jpg'],
          title: 'XX59',
          url: ''
        },
        {
          images: ['../../../assets/product-zx9-speaker/desktop/image-product.jpg', '../../../assets/product-zx9-speaker/tablet/image-product.jpg', '../../../assets/product-zx9-speaker/mobile/image-product.jpg'],
          title: 'ZX9 SPEAKER',
          url: ''
        }
      ]
    }
  ]

  ngOnInit(): void {
    this.productInfo = this.productDatas[0] 
  }

}

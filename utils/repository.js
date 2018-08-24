export class Repository {
  constructor() {
    this.data = {
      shops: {
        '1': {
          name: 'not conventional',
          image: require('../src/assets/1.jpg'),
          url: 'http://not-conventional.com'
        }

      },

      goods: {
        '1': {
          shop: '1',
          name: 'asymmtry shirt',
          price: '8.800',
          image: require('../src/assets/1-1.jpg'),
          information: 'ウォッシャブルジョーゼット生地を使用したアシンメトリーシャツ。落ち感のある生地とアシンメトリーな形でよりモードなスタイリングに最適なアイテムです。ユニセックスでお召し上がれます。'
        },
        '2': {
          shop: '1',
          name: 'wide shirt',
          price: '8.800',
          image: require('../src/assets/1-2.jpg'),
          information: 'ウォッシャブルジョーゼット生地を使用したアシンメトリーシャツ。落ち感のある生地とアシンメトリーな形でよりモードなスタイリングに最適なアイテムです。ユニセックスでお召し上がれます。'
        },
        '3': {
          shop: '1',
          name: 'L/S big cutsaw',
          price: '6.800',
          image: require('../src/assets/1-3.jpg'),
          information: '40/2天竺生地を使用したスーパービッグカットソーです。熱く柔らかい風合いがあり１枚でも着用しやすい生地になります。かなり大きめのTシャツですがパンツのサイズを選ばずコーディネートしやすいアイテムです。ユニセックスでお召し上がれます。'
        },
        '4': {
          shop: '1',
          name: 'H/S big cutsaw',
          price: '6.800',
          image: require('../src/assets/1-4.jpg'),
          information: '40/2天竺生地を使用したスーパービッグカットソーです。熱く柔らかい風合いがあり１枚でも着用しやすい生地になります。かなり大きめのTシャツですがパンツのサイズを選ばずコーディネートしやすいアイテムです。ユニセックスでお召し上がれます。'
        },
        '5': {
          shop: '1',
          name: 'codking shirt',
          price: '9.800',
          image: require('../src/assets/1-5.jpg'),
          information: 'T/R生地を使用したドッキングシャツ。程よい落ち感のある肌触りがより生地です。今期トレンドのチェック柄の同色でドッキングし、リメイク風のアイテムです。'
        },
        '6': {
          shop: '1',
          name: 'jacket',
          price: '9.800',
          image: require('../src/assets/1-6.jpg'),
          information: 'It is cool.'
        },
        '7': {
          shop: '1',
          name: 'shirts',
          price: '8.800',
          image: require('../src/assets/1-7.jpg'),
          information: 'It is cool.'
        },
        '8': {
          shop: '1',
          name: 'pants',
          price: '7.800',
          image: require('../src/assets/1-8.jpg'),
          information: 'It is cool.'
        },
        '9': {
          shop: '1',
          name: 'pants',
          price: '11.800',
          image: require('../src/assets/1-9.jpg'),
          information: 'It is cool.'
        },
        '10': {
          shop: '1',
          name: 'T-shirts',
          price: '11.800',
          image: require('../src/assets/1-10.jpg'),
          information: 'It is cool.'
        },
        '11': {
          shop: '1',
          name: 'shirts',
          price: '10.800',
          image: require('../src/assets/1-11.jpg'),
          information: 'It is cool.'
        },
        '12': {
          shop: '1',
          name: 'jacket',
          price: '11.800',
          image: require('../src/assets/1-12.jpg'),
          information: 'It is cool.'
        },
        '13': {
          shop: '1',
          name: 'T-shirts',
          price: '5.800',
          image: require('../src/assets/1-13.jpg'),
          information: 'It is cool.'
        },
        '14': {
          shop: '1',
          name: 'T-shirts',
          price: '5.800',
          image: require('../src/assets/1-14.jpg'),
          information: 'It is cool.'
        },
        '15': {
          shop: '1',
          name: 'T-shirts',
          price: '6.800',
          image: require('../src/assets/1-15.jpg'),
          information: 'It is cool.'
        },
        '16': {
          shop: '1',
          name: 'T-shirts',
          price: '6.800',
          image: require('../src/assets/1-16.jpg'),
          information: 'It is cool.'
        },
        '17': {
          shop: '1',
          name: 'T-shirts',
          price: 10000,
          image: require('../src/assets/1-17.jpg'),
          information: 'It is cool.'
        },
        '18': {
          shop: '1',
          name: 'jacket',
          price: '6.800',
          image: require('../src/assets/1-18.jpg'),
          information: 'It is cool.'
        },


      },

      coordinates: {
        '1': {
          goods: '1',
          images: [
            require('../src/assets/1-1-1.jpg'),
            require('../src/assets/1-1-2.jpg'),
            require('../src/assets/1-1-3.jpg'),
            require('../src/assets/1-1-4.jpg')

          ]
        },
        '2': {
          goods: '2',
          images: [
            require('../src/assets/1-2-1.jpg'),
            require('../src/assets/1-2-2.jpg'),
            require('../src/assets/1-2-3.jpg'),
            require('../src/assets/1-2-4.jpg'),
            require('../src/assets/1-2-5.jpg')
          ]
        },
        '3': {
          goods: '3',
          images: [
            require('../src/assets/1-3-1.jpg'),
            require('../src/assets/1-3-2.jpg'),
            require('../src/assets/1-3-3.jpg')
          ]
        },
        '4': {
          goods: '4',
          images: [
            require('../src/assets/1-4-1.jpg'),
            require('../src/assets/1-4-2.jpg'),
            require('../src/assets/1-4-3.jpg'),
            require('../src/assets/1-4-4.jpg'),
            require('../src/assets/1-4-5.jpg'),
            require('../src/assets/1-4-6.jpg'),
            require('../src/assets/1-4-7.jpg'),
            require('../src/assets/1-4-8.jpg')
          ]
        },
        '5': {
          goods: '5',
          images: [
            require('../src/assets/1-5-1.jpg'),
            require('../src/assets/1-5-2.jpg'),
            require('../src/assets/1-5-3.jpg')
          ]
        },
        '6': {
          goods: '6',
          images: [
            require('../src/assets/1-6-1.jpg'),
            require('../src/assets/1-6-2.jpg')
          ]
        },
        '7': {
          goods: '7',
          images: [
            require('../src/assets/1-7-1.jpg'),
            require('../src/assets/1-7-2.jpg'),
            require('../src/assets/1-7-3.jpg'),
            require('../src/assets/1-7-4.jpg')

          ]
        },
        '8': {
          goods: '8',
          images: [
            require('../src/assets/1-8-1.jpg'),
            require('../src/assets/1-8-2.jpg')
          ]
        },
        '9': {
          goods: '9',
          images: [
            require('../src/assets/1-9-1.jpg')
          ]
        },
        '10': {
          goods: '10',
          images: [
            require('../src/assets/1-10-1.jpg')
          ]
        },
        '11': {
          goods: '11',
          images: [
            require('../src/assets/1-11-1.jpg'),
            require('../src/assets/1-11-2.jpg'),
            require('../src/assets/1-11-3.jpg')
          ]
        },
        '12': {
          goods: '12',
          images: [
            require('../src/assets/1-12-1.jpg'),
            require('../src/assets/1-12-2.jpg'),
            require('../src/assets/1-12-3.jpg'),
            require('../src/assets/1-12-4.jpg'),
            require('../src/assets/1-12-5.jpg')
          ]
        },
        '13': {
          goods: '13',
          images: [
            require('../src/assets/1-13-1.jpg'),
            require('../src/assets/1-13-2.jpg'),
          ]
        },
        '14': {
          goods: '14',
          images: [
            require('../src/assets/1-14-1.jpg'),
            require('../src/assets/1-14-2.jpg'),
            require('../src/assets/1-14-3.jpg'),
            require('../src/assets/1-14-4.jpg')
          ]
        },
        '15': {
          goods: '15',
          images: [
            require('../src/assets/1-15-1.jpg'),
            require('../src/assets/1-15-2.jpg')
          ]
        },
        '16': {
          goods: '16',
          images: [
            require('../src/assets/1-16-1.jpg'),
            require('../src/assets/1-16-2.jpg')
          ]
        },
        '17': {
          goods: '17',
          images: [
            require('../src/assets/1-17-1.jpg'),
            require('../src/assets/1-17-2.jpg'),
          ]
        },
        '18': {
          goods: '18',
          images: [
            require('../src/assets/1-18-1.jpg'),
            require('../src/assets/1-18-2.jpg')
          ]
        },

      }
    }


  }
  connectGoods(shop_id) {
    return this.data.goods.filter((good) => {
      return good.shop == shop_id
    })
  }

  connectCoordinates(goods_id) {
    return this.data.coordinates.filter((coordinate) => {
      return coordinate.goods == goods_id
    })
  }

  getShops() {
    return this.data.shops
  }

  getShop(id) {
    return this.data.shops[id]
  }

  getGoods() {
    return this.data.goods
  }

  getGood(id) {
    return this.data.goods[id]
  }

  getCoordinate(id) {
    return this.data.coordinates[id]
  }

}

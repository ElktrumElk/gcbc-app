import { ref } from 'vue'

export const datas = () => {
  const teachings = ref({
    April: [
      {
        id: 1,
        title: 'The Transformative Power of Love and Grace',
        teacher: 'Pastor Michael',
        date: 'April 26 2026',
        image: 'https://iskconnews.org/media/images/2014/06-Jun/hegy.jpg',
        duration: '45:12',
      },
      {
        id: 2,
        title: 'Spring Renewal: A Complete Transformation of Mind',
        teacher: 'Pastor Michael',
        date: 'April 19 2026',
        image:
          'https://images.trvl-media.com/place/3000458394/c30027e8-6c12-43ec-bddc-bc30f971cb29.jpg',
        duration: '52:40',
      },
      {
        id: 3,
        title: 'Easter Sunday Celebration Devotional',
        teacher: 'Pastor Michael',
        date: 'April 12 2026',
        image:
          'https://www.maxanders.com/wp-content/uploads/2016/04/Holy-Spirit-in-Mental-Renewal.001.jpg',
        duration: '38:15',
      },
      {
        id: 4,
        title: 'Walking into the Promises of the New Year',
        teacher: 'Pastor Michael',
        date: 'April 5  2026',
        image:
          'https://media.swncdn.com/cms/CROSSCARDS/26743-07062015-romans-12-9-social-550x320.jpg',
        duration: '41:23',
      },
    ],
    March: [
      {
        id: 5,
        title: 'Starting Fresh with Unshakable Faith',
        teacher: 'Pastor Michael',
        date: 'March 29 2026',
        image:
          'https://b3630164.smushcdn.com/3630164/wp-content/uploads/2024/10/Rapture-1-1024x576.jpg?lossy=2&strip=1&webp=1',
        duration: '48:07',
      },
      {
        id: 6,
        title: 'The Rapture C',
        teacher: 'Pastor Michael',
        date: 'March 22 2026',
        image:
          'https://b3630164.smushcdn.com/3630164/wp-content/uploads/2024/10/Rapture-1-1024x576.jpg?lossy=2&strip=1&webp=1',
        duration: '55:34',
      },
      {
        id: 7,
        title: 'The Rapture B',
        teacher: 'Pastor Michael',
        date: 'March 15 2026',
        image:
          'https://b3630164.smushcdn.com/3630164/wp-content/uploads/2024/10/Rapture-1-1024x576.jpg?lossy=2&strip=1&webp=1',
        duration: '34:52',
      },
      {
        id: 8,
        title: 'The Rapture A',
        teacher: 'Pastor Michael',
        date: 'March 8 2026',
        image:
          'https://b3630164.smushcdn.com/3630164/wp-content/uploads/2024/10/Rapture-1-1024x576.jpg?lossy=2&strip=1&webp=1',
        duration: '59:18',
      },
    ],
  })

  return { teachings }
}

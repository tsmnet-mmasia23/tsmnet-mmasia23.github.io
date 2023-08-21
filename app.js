const backend = 'http://34.132.148.183:5000'
const app = Vue.createApp({
  el: '#app',
  data () {
    return {
      showAllRate: false,
      DS: [ 'FMA', 'MusicNet' , 'VCTK' ],
      audio: {
        FMA: 'fma_small/122088.mp3',
        MusicNet: 'test_data/1759.mp3',
        VCTK: 'wav48_silence_trimmed/p304/p304_110_mic1.mp3',
      },
      CR: {
        FMA: 'tsmnet',
        MusicNet: 'tsmnet',
        VCTK: 'tsmnet',
      },
      rate: [
        '0.5', '0.55', '0.6', '0.65', '0.7', '0.75', '0.8', '0.85', '0.9', '0.95',
        '1.0', '1.1', '1.2', '1.3', '1.4', '1.5', '1.6', '1.7', '1.8', '1.9', '2.0'
      ],
      samples: {

        FMA: [
          'fma_small/122088.mp3',
          'fma_small/030895.mp3',
          'fma_small/119828.mp3',
          'fma_small/103521.mp3',
          'fma_small/052641.mp3',
          'fma_small/109901.mp3',
          'fma_small/121257.mp3',
          'fma_small/125193.mp3',
          'fma_small/070208.mp3',
          'fma_small/085041.mp3',
          'fma_small/062589.mp3',
          'fma_small/150062.mp3',
          'fma_small/154414.mp3',
          'fma_small/141144.mp3',
          'fma_small/054039.mp3',
          'fma_small/129404.mp3',
          'fma_small/099361.mp3',
          'fma_small/116877.mp3',
          'fma_small/054666.mp3',
          'fma_small/119941.mp3',
        ],

        MusicNet: [
          'test_data/1759.mp3',
          'test_data/2106.mp3',
          'train_data/2294.mp3',
          'train_data/2357.mp3',
          'train_data/2208.mp3',
          'train_data/2231.mp3',
          'train_data/2620.mp3',
          'train_data/2224.mp3',
          'train_data/2595.mp3',
          'train_data/2622.mp3',
          'train_data/2151.mp3',
          'train_data/2215.mp3',
          'train_data/1872.mp3',
          'train_data/2614.mp3',
          'train_data/2167.mp3',
          'train_data/2211.mp3',
          'train_data/2575.mp3',
          'train_data/2248.mp3',
          'train_data/2302.mp3',
          'train_data/2463.mp3',
        ],

        VCTK: [
          'wav48_silence_trimmed/p304/p304_110_mic1.mp3',
          'wav48_silence_trimmed/p304/p304_117_mic2.mp3',
          'wav48_silence_trimmed/p335/p335_232_mic2.mp3',
          'wav48_silence_trimmed/p335/p335_158_mic1.mp3',
          'wav48_silence_trimmed/p225/p225_044_mic2.mp3',
          'wav48_silence_trimmed/p282/p282_096_mic1.mp3',
          'wav48_silence_trimmed/p239/p239_072_mic1.mp3',
          'wav48_silence_trimmed/p227/p227_025_mic1.mp3',
          'wav48_silence_trimmed/p227/p227_348_mic2.mp3',
          'wav48_silence_trimmed/p288/p288_206_mic1.mp3',
          'wav48_silence_trimmed/p288/p288_045_mic1.mp3',
          'wav48_silence_trimmed/p288/p288_089_mic1.mp3',
          'wav48_silence_trimmed/p275/p275_093_mic1.mp3',
          'wav48_silence_trimmed/p275/p275_132_mic2.mp3',
          'wav48_silence_trimmed/p286/p286_060_mic2.mp3',
          'wav48_silence_trimmed/p226/p226_305_mic1.mp3',
          'wav48_silence_trimmed/p226/p226_090_mic1.mp3',
          'wav48_silence_trimmed/p258/p258_322_mic1.mp3',
          'wav48_silence_trimmed/p256/p256_289_mic2.mp3',
          'wav48_silence_trimmed/p251/p251_318_mic2.mp3',
        ]
      }
    }
  },
  watch: {
    'CR.FMA':         function () { this.reload('FMA') },
    'audio.FMA':      function () { this.reload('FMA') },
    'CR.MusicNet':    function () { this.reload('MusicNet') },
    'audio.MusicNet': function () { this.reload('MusicNet') },
    'CR.VCTK':         function () { this.reload('VCTK') },
    'audio.VCTK': function () { this.reload('VCTK') },
    'showAllRate': function () {
      for (const d in DS) {
        this.reload(d) 
      }
    },
  },
  methods: {
    reload (key) {
      for (const r of this.showAllRate ? this.rate : this.rate.filter((_, idx) => idx % 2 === 0)) {
        console.log(key + r)
        this.$refs[key + r].load()
      }
    }
  }
})

app.mount('#app')

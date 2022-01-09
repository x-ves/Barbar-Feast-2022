import { createStore } from 'vuex'

export default createStore({
  state: {
    bands: [
      {
        bandName: "Velikije Luki",
        tags: ["punk"],
        genre: "Punk Rock",
        imgUrl: "https://f12.pmo.ee/wnxEkKO6qJGWS_d_wQ9sZrjOg9Y=/1200x630/smart/nginx/o/2013/09/05/2249745t1hf033.jpg",
        vidUrl: "",
        siteUrl: "",
        facebookUrl: "",
        spotifyUrl: "",
        bandcampUrl: ""
      },
      {
        bandName: "Kosmikud",
        tags: ["rock", "alternative", "depressive"],
        genre: "Alternative / Depressive Rock",
        imgUrl: "https://api.delfi.ee/media-api-image-cropper/v1/87de77c0-b7cb-11eb-a75b-018d084d969a.jpg?w=1200&h=711&ch=0.75&cw=1&cx=0&cy=0.0558&r=16:9",
        vidUrl: "",
        siteUrl: "",
        facebookUrl: "",
        spotifyUrl: "",
        bandcampUrl: ""
      },
      {
        bandName: "Pime",
        tags: ["metal", "black"],
        genre: "Black Metal",
        imgUrl: "https://www.metal-archives.com/images/3/5/4/0/3540316128_photo.jpg?1507",
        vidUrl: "",
        siteUrl: "",
        facebookUrl: "",
        spotifyUrl: "",
        bandcampUrl: ""
      },
      {
        bandName: "Strych:9",
        tags: ["metal", "industrial"],
        genre: "Industrial Metal",
        imgUrl: "https://f10.pmo.ee/hpuhRcL57hX5riEcoQdGJnpNJjM=/685x685/filters:focal(51x102:3745x2470)/nginx/o/2021/10/15/14139649t1h9372.jpg",
        vidUrl: "",
        siteUrl: "",
        facebookUrl: "",
        spotifyUrl: "",
        bandcampUrl: ""
      },
      {
        bandName: "Kurjam",
        tags: ["punk"],
        genre: "Punk Rock",
        imgUrl: "https://i.err.ee/smartcrop?type=optimize&width=672&aspectratio=16%3A10&url=https%3A%2F%2Fs.err.ee%2Fphoto%2Fcrop%2F2017%2F10%2F13%2F413712h61cc.jpg",
        vidUrl: "",
        siteUrl: "",
        facebookUrl: "",
        spotifyUrl: "",
        bandcampUrl: ""
      },
      {
        bandName: "Herald",
        tags: ["metal", "heavy"],
        genre: "Heavy Metal",
        imgUrl: "https://snoozecontrol.be/media/herald1.jpg",
        vidUrl: "",
        siteUrl: "",
        facebookUrl: "",
        spotifyUrl: "",
        bandcampUrl: ""
      },
    ]
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    bands(state) {
      return state.bands;
    }
  }
})

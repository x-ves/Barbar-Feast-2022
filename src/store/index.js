import { createStore } from 'vuex'

export default createStore({
  state: {
    bands: [
      {
        bandName: "Korpiklaani (FIN)",
        tags: ["metal"],
        genre: "Folk Metal",
        imgUrl: "/lineup-photos/korpiklaani.webp",
        vidUrl: "https://www.youtube-nocookie.com/embed/e7kJRGPgvRQ",
        siteUrl: "https://korpiklaani.com/",
        facebookUrl: "https://www.facebook.com/korpiklaani",
        spotifyUrl: "https://open.spotify.com/artist/521Yl3LUvD7G9dMRO4fpCy",
        bandcampUrl: "https://korpiklaani.bandcamp.com/"
      },
      {
        bandName: "Untsakad",
        tags: ["rock"],
        genre: "Folk",
        imgUrl: "/lineup-photos/untsakad.webp",
        vidUrl: "https://www.youtube-nocookie.com/embed/0LKPqR9w-P0",
        siteUrl: "https://www.untsakad.ee/",
        facebookUrl: "https://www.facebook.com/untsantsakad",
        spotifyUrl: "https://open.spotify.com/artist/66VTlSbqv8ll7qAcW4ZzoL",
        bandcampUrl: ""
      },
      {
        bandName: "Mandoterror",
        tags: ["rock"],
        genre: "Folk Rock",
        imgUrl: "/lineup-photos/mandoterror.webp",
        vidUrl: "https://www.youtube-nocookie.com/embed/X7H9jHsYRMM",
        siteUrl: "",
        facebookUrl: "https://www.facebook.com/mandoterror",
        spotifyUrl: "https://open.spotify.com/artist/6wxAwBLMDoxY9hvtRJISv1",
        bandcampUrl: ""
      },
      {
        bandName: "J.M.K.E.",
        tags: ["punk"],
        genre: "Punk",
        imgUrl: "/lineup-photos/jmke.webp",
        vidUrl: "https://www.youtube-nocookie.com/embed/HDUFL_HW_7A",
        siteUrl: "",
        facebookUrl: "https://www.facebook.com/profile.php?id=100047356154332",
        spotifyUrl: "https://open.spotify.com/artist/29gCWEgzaA9LjSy2dVnSD7",
        bandcampUrl: ""
      },
      {
        bandName: "Evestus",
        tags: ["metal", "industrial"],
        genre: "New Wave of Industrial Goth",
        imgUrl: "/lineup-photos/evestus.webp",
        vidUrl: "https://www.youtube-nocookie.com/embed/fAuFkKLq4Yw",
        siteUrl: "https://evestus.squarespace.com/",
        facebookUrl: "https://www.facebook.com/EvestusOfficial/",
        spotifyUrl: "https://open.spotify.com/artist/7LZUPKL2PXy9cc8cmah47f",
        bandcampUrl: "https://evestus.bandcamp.com/"
      },
      {
        bandName: "Singer Vinger",
        tags: ["punk"],
        genre: "Punk Rock",
        imgUrl: "/lineup-photos/singervinger.webp",
        vidUrl: "https://www.youtube-nocookie.com/embed/bLEu00yuL0k",
        siteUrl: "http://www.singervinger.ee/",
        facebookUrl: "https://www.facebook.com/singervinger",
        spotifyUrl: "",
        bandcampUrl: ""
      },
      {
        bandName: "Mört",
        tags: ["punk"],
        genre: "Punk'N'Roll",
        imgUrl: "/lineup-photos/mxrt.webp",
        vidUrl: "https://www.youtube-nocookie.com/embed/tBq-9FI-beA",
        siteUrl: "",
        facebookUrl: "https://www.facebook.com/mortmusic",
        spotifyUrl: "https://open.spotify.com/artist/4iHwPwocXMSAncAvrNpC9o",
        bandcampUrl: "https://mortband.bandcamp.com/"
      },
      {
        bandName: "DND",
        tags: ["rock"],
        genre: "Alternative Rock",
        imgUrl: "/lineup-photos/dnd.webp",
        vidUrl: "https://www.youtube-nocookie.com/embed/YZe8xICpIDM",
        siteUrl: "",
        facebookUrl: "https://www.facebook.com/deadnextdoor",
        spotifyUrl: "https://open.spotify.com/artist/2G4bEDt53hEye9Jt9WYY4L",
        bandcampUrl: ""
      },
      {
        bandName: "Thou Shell of Death",
        tags: ["metal"],
        genre: "Atmospheric Black Metal",
        imgUrl: "/lineup-photos/tsod.webp",
        vidUrl: "https://www.youtube-nocookie.com/embed/SY2B-XXJXLQ",
        siteUrl: "https://tsod.eu/",
        facebookUrl: "https://www.facebook.com/thoushellofdeath",
        spotifyUrl: "https://open.spotify.com/artist/4otvvpcifOmVSm0FRmMBsa",
        bandcampUrl: "https://thoushellofdeath.bandcamp.com/"
      },
      {
        bandName: "August Urr",
        tags: ["punk"],
        genre: "Folk Punk Rock",
        imgUrl: "/lineup-photos/augusturr.webp",
        vidUrl: "https://www.youtube-nocookie.com/embed/SkJsEf_z3fo",
        siteUrl: "",
        facebookUrl: "https://www.facebook.com/August-Urr-100368471358857",
        spotifyUrl: "",
        bandcampUrl: ""
      },
      {
        bandName: "Hukkunud Hinged",
        tags: ["metal"],
        genre: "Doom Metal",
        imgUrl: "/lineup-photos/hukkunudhinged.webp",
        vidUrl: "https://www.youtube-nocookie.com/embed/NZZT-k_Bug0",
        siteUrl: "",
        facebookUrl: "https://www.facebook.com/Hukkunud-Hinged-151072041612847",
        spotifyUrl: "https://open.spotify.com/artist/66iCd4oj8Mu2kmT4S1FECM",
        bandcampUrl: "https://hukkunudhinged.bandcamp.com/"
      },
      {
        bandName: "Killhall (FIN/EST)",
        tags: ["metal"],
        genre: "Melodic Deathrash",
        imgUrl: "/lineup-photos/killhall.webp",
        vidUrl: "https://www.youtube-nocookie.com/embed/0BaqcyEnFdk",
        siteUrl: "",
        facebookUrl: "https://www.facebook.com/killhall",
        spotifyUrl: "",
        bandcampUrl: ""
      },
      {
        bandName: "Bestia",
        tags: ["metal"],
        genre: "Pagan Black Metal",
        imgUrl: "/lineup-photos/bestia.webp",
        vidUrl: "https://www.youtube-nocookie.com/embed/nqiEkvFyH9c",
        siteUrl: "https://bestia.pimeduse.org/",
        facebookUrl: "https://www.facebook.com/bestia.est",
        spotifyUrl: "https://open.spotify.com/artist/1DvYzllGpoyKb82t0jIZAB",
        bandcampUrl: "https://bestia-ee.bandcamp.com/"
      },
      {
        bandName: "Deformation",
        tags: ["metal"],
        genre: "Hardcore",
        imgUrl: "/lineup-photos/deformation.webp",
        vidUrl: "https://www.youtube-nocookie.com/embed/kyRpSemT7tY",
        siteUrl: "",
        facebookUrl: "https://www.facebook.com/deformationest",
        spotifyUrl: "https://open.spotify.com/artist/2Q0LIW20qNmvs8zhbK3db6",
        bandcampUrl: ""
      },
      {
        bandName: "Tankist",
        tags: ["metal"],
        genre: "Thrash Metal",
        imgUrl: "/lineup-photos/tankist.webp",
        vidUrl: "https://www.youtube-nocookie.com/embed/8iKQcwhPRFs",
        siteUrl: "",
        facebookUrl: "https://www.facebook.com/tankistband/",
        spotifyUrl: "https://open.spotify.com/artist/7JAVIF6jNFgcVbGrAuIIGH",
        bandcampUrl: "https://tankist.bandcamp.com/"
      },
      {
        bandName: "Valem Vale",
        tags: ["metal"],
        genre: "Heavy Metal",
        imgUrl: "/lineup-photos/valemvale.webp",
        vidUrl: "https://www.youtube-nocookie.com/embed/SYXUru3zdt0",
        siteUrl: "",
        facebookUrl: "https://www.facebook.com/Valem-Vale-231585725448027",
        spotifyUrl: "",
        bandcampUrl: ""
      },
      {
        bandName: "Red Zeppelin",
        tags: ["rock"],
        genre: "Led Zeppelin tribute",
        imgUrl: "/lineup-photos/redzeppelin.webp",
        vidUrl: "",
        siteUrl: "",
        facebookUrl: "https://www.facebook.com/Red-Zeppelin-107602345187487/",
        spotifyUrl: "",
        bandcampUrl: ""
      },
      {
        bandName: "Nuclear Monarch",
        tags: ["metal"],
        genre: "Industrial Death Doom Metal",
        imgUrl: "/lineup-photos/nuclearmonarch.webp",
        vidUrl: "https://www.youtube-nocookie.com/embed/_QTQcWpDuX8",
        siteUrl: "https://nuclearmonarch.ee/",
        facebookUrl: "https://www.facebook.com/NuclearMonarch",
        spotifyUrl: "",
        bandcampUrl: "https://nuclearmonarch.bandcamp.com/"
      },
      {
        bandName: "Black Royal (FIN)",
        tags: ["metal"],
        genre: "Death 'N' Sludge",
        imgUrl: "/lineup-photos/blackroyal.webp",
        vidUrl: "https://www.youtube-nocookie.com/embed/x4mZG87gMPY",
        siteUrl: "https://www.blackroyal.fi/",
        facebookUrl: "https://www.facebook.com/blackroyalmusic",
        spotifyUrl: "https://open.spotify.com/artist/33lkAv8r2X0dsr8AWzZ6MY",
        bandcampUrl: "https://blackroyal.bandcamp.com/"
      },
      {
        bandName: "Räpina Jack",
        tags: ["rock"],
        genre: "Country Blues",
        imgUrl: "/lineup-photos/r2pinajack.webp",
        vidUrl: "https://www.youtube-nocookie.com/embed/SPaEonRi5Fw",
        siteUrl: "",
        facebookUrl: "https://www.facebook.com/rapinajack/",
        spotifyUrl: "https://open.spotify.com/artist/5hgq34nDRdAgn411wo5n2r",
        bandcampUrl: ""
      },
      {
        bandName: "Raev",
        tags: ["metal"],
        genre: "Thrash",
        imgUrl: "/lineup-photos/raev.webp",
        vidUrl: "https://www.youtube-nocookie.com/embed/ghe-Tp859H8",
        siteUrl: "",
        facebookUrl: "https://www.facebook.com/Raev.official",
        spotifyUrl: "https://open.spotify.com/artist/6tIETzPHnm4opeO97HZaGI",
        bandcampUrl: ""
      },
      {
        bandName: "Sky Down",
        tags: ["metal"],
        genre: "Female-fronted Heavy Metal",
        imgUrl: "/lineup-photos/skydown.webp",
        vidUrl: "https://www.youtube-nocookie.com/embed/QqECMZEIf3g",
        siteUrl: "",
        facebookUrl: "https://www.facebook.com/profile.php?id=100051040035953",
        spotifyUrl: "",
        bandcampUrl: ""
      },
      {
        bandName: "Rattlecan Paintjob",
        tags: ["punk"],
        genre: "Punk Rock",
        imgUrl: "/lineup-photos/rattlecan.webp",
        vidUrl: "https://www.youtube-nocookie.com/embed/wQ-WLgfXInM",
        siteUrl: "",
        facebookUrl: "https://www.facebook.com/RattlecanPaintjob",
        spotifyUrl: "https://open.spotify.com/artist/1s41IKNssBlBwhKvbIQotA",
        bandcampUrl: "https://rattlecanpaintjob.bandcamp.com/"
      },
      {
        bandName: "Faraday",
        tags: ["rock"],
        genre: "Rock",
        imgUrl: "/lineup-photos/faraday.webp",
        vidUrl: "https://www.youtube-nocookie.com/embed/3xVOAyIP-qQ",
        siteUrl: "https://faradayband.ee/",
        facebookUrl: "https://www.facebook.com/faradayeesti",
        spotifyUrl: "https://open.spotify.com/artist/72ThiFY8O4p31A9FXpCpnn",
        bandcampUrl: ""
      },
      {
        bandName: "Fööniks",
        tags: ["rock"],
        genre: "Hard Rock",
        imgUrl: "/lineup-photos/fxxniks.webp",
        vidUrl: "https://www.youtube-nocookie.com/embed/FOOBxKJ4-1o",
        siteUrl: "https://www.eestiaa.ee/kataloog/ansamblid/fooniks",
        facebookUrl: "https://www.facebook.com/fooniksband",
        spotifyUrl: "https://open.spotify.com/artist/26kkWp1LYiKFpfu5TnuTUK",
        bandcampUrl: ""
      },
      {
        bandName: "Must Bass Läks Üle Tee",
        tags: ["rock"],
        genre: "Folk Rock",
        imgUrl: "/lineup-photos/mustbass.webp",
        vidUrl: "https://www.youtube-nocookie.com/embed/W_O6AFYedJE",
        siteUrl: "https://mustbass.ee/",
        facebookUrl: "https://www.facebook.com/mustbassyletee",
        spotifyUrl: "https://open.spotify.com/artist/6Ohq7PEXuk4V7TC0nPTmhO",
        bandcampUrl: ""
      },
      {
        bandName: "Stone Throne",
        tags: ["metal", "rock"],
        genre: "Metal / Rock",
        imgUrl: "/lineup-photos/stonethrone.webp",
        vidUrl: "https://www.youtube-nocookie.com/embed/QCF8ZcRoBSc",
        siteUrl: "",
        facebookUrl: "https://www.facebook.com/stonethrqne/",
        spotifyUrl: "https://open.spotify.com/artist/0zhamC9giQDIx4LwrETBVt",
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

<template>
  <div class="google-map" id="map"></div>
</template>

<script>
import { Loader } from "@googlemaps/js-api-loader";

export default {
  props: {
    center: {
      type: Object,
      default: () => ({ lat: 59.222651, lng: 25.031062 })
    },
    zoom: {
      type: Number,
      default: 15
    },
    streetViewControl: {
      type: Boolean,
      default: true
    },
    mapTypeControl: {
      type: Boolean,
      default: true
    },
    fullscreenControl: {
      type: Boolean,
      default: true
    },
    zoomControl: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      map: null,
      infowindow: null,
      markers: []
    };
  },
  watch: {
    center() {
      this.resetCenter();
/*       this.setMarker(); */
    }
  },
  mounted() {
    this.initMap();
/*     this.setMarker(); */
  },
  methods: {
    initMap() {
        const loader = new Loader({
            apiKey: "AIzaSyB-enpSaq_E1YejJBji6Fk5UR0s5eHwAfc"
        });

        const mapElement = document.getElementById("map");

        loader.load().then(() => {
                    const google = window.google;
            this.map = new google.maps.Map(mapElement, {
                center: this.center,
                zoom: this.zoom,
                maxZoom: 20,
                minZoom: 3,
                streetViewControl: this.streetViewControl,
                mapTypeControl: this.mapTypeControl,
                fullscreenControl: this.fullscreenControl,
                zoomControl: this.zoomControl,
                styles: [
                {
                    elementType: "geometry",
                    stylers: [
                    {
                        color: "#f5f5f5"
                    }
                    ]
                },
                {
                    elementType: "geometry.stroke",
                    stylers: [
                    {
                        visibility: "off"
                    }
                    ]
                },
                {
                    elementType: "labels.icon",
                    stylers: [
                    {
                        visibility: "simplified"
                    }
                    ]
                },
                {
                    elementType: "labels.text",
                    stylers: [
                    {
                        color: "#ffffff"
                    },
                    {
                        visibility: "on"
                    }
                    ]
                },
                {
                    elementType: "labels.text.fill",
                    stylers: [
                    {
                        color: "#ffffff"
                    },
                    {
                        visibility: "on"
                    },
                    {
                        weight: 8
                    }
                    ]
                },
                {
                    elementType: "labels.text.stroke",
                    stylers: [
                    {
                        visibility: "off"
                    }
                    ]
                },
                {
                    featureType: "administrative.land_parcel",
                    elementType: "labels",
                    stylers: [
                    {
                        visibility: "off"
                    }
                    ]
                },
                {
                    featureType: "administrative.land_parcel",
                    elementType: "labels.text.fill",
                    stylers: [
                    {
                        color: "#bdbdbd"
                    }
                    ]
                },
                {
                    featureType: "landscape",
                    elementType: "geometry.fill",
                    stylers: [
                    {
                        color: "#322a2a"
                    }
                    ]
                },
                {
                    featureType: "poi",
                    elementType: "geometry",
                    stylers: [
                    {
                        color: "#eeeeee"
                    }
                    ]
                },
                {
                    featureType: "poi",
                    elementType: "geometry.fill",
                    stylers: [
                    {
                        color: "#2c2525"
                    }
                    ]
                },
                {
                    featureType: "poi",
                    elementType: "labels.text",
                    stylers: [
                    {
                        visibility: "off"
                    }
                    ]
                },
                {
                    featureType: "poi",
                    elementType: "labels.text.fill",
                    stylers: [
                    {
                        color: "#757575"
                    }
                    ]
                },
                {
                    featureType: "poi.park",
                    elementType: "geometry",
                    stylers: [
                    {
                        color: "#e5e5e5"
                    }
                    ]
                },
                {
                    featureType: "poi.park",
                    elementType: "geometry.fill",
                    stylers: [
                    {
                        color: "#2c2525"
                    }
                    ]
                },
                {
                    featureType: "poi.park",
                    elementType: "labels.text.fill",
                    stylers: [
                    {
                        color: "#9e9e9e"
                    },
                    {
                        visibility: "on"
                    }
                    ]
                },
                {
                    featureType: "road",
                    elementType: "geometry",
                    stylers: [
                    {
                        color: "#ffffff"
                    }
                    ]
                },
                {
                    featureType: "road",
                    elementType: "geometry.fill",
                    stylers: [
                    {
                        color: "#303030"
                    }
                    ]
                },
                {
                    featureType: "road.arterial",
                    elementType: "geometry.fill",
                    stylers: [
                    {
                        color: "#8f8f8f"
                    }
                    ]
                },
                {
                    featureType: "road.arterial",
                    elementType: "labels.text.fill",
                    stylers: [
                    {
                        color: "#ffffff"
                    }
                    ]
                },
                {
                    featureType: "road.highway",
                    elementType: "geometry",
                    stylers: [
                    {
                        color: "#dadada"
                    }
                    ]
                },
                {
                    featureType: "road.highway",
                    elementType: "geometry.fill",
                    stylers: [
                    {
                        color: "#ff0000"
                    }
                    ]
                },
                {
                    featureType: "road.highway",
                    elementType: "labels.text.fill",
                    stylers: [
                    {
                        color: "#ffffff"
                    }
                    ]
                },
                {
                    featureType: "road.highway.controlled_access",
                    elementType: "labels.text.fill",
                    stylers: [
                    {
                        color: "#ffffff"
                    }
                    ]
                },
                {
                    featureType: "road.local",
                    elementType: "geometry.fill",
                    stylers: [
                    {
                        color: "#c2c2c2"
                    }
                    ]
                },
                {
                    featureType: "road.local",
                    elementType: "labels",
                    stylers: [
                    {
                        visibility: "off"
                    }
                    ]
                },
                {
                    featureType: "road.local",
                    elementType: "labels.text.fill",
                    stylers: [
                    {
                        color: "#ffffff"
                    }
                    ]
                },
                {
                    featureType: "transit.line",
                    elementType: "geometry",
                    stylers: [
                    {
                        color: "#e5e5e5"
                    }
                    ]
                },
                {
                    featureType: "transit.station",
                    elementType: "geometry",
                    stylers: [
                    {
                        color: "#eeeeee"
                    }
                    ]
                },
                {
                    featureType: "transit.station",
                    elementType: "geometry.fill",
                    stylers: [
                    {
                        color: "#2c2525"
                    }
                    ]
                },
                {
                    featureType: "water",
                    elementType: "geometry",
                    stylers: [
                    {
                        color: "#c9c9c9"
                    }
                    ]
                },
                {
                    featureType: "water",
                    elementType: "geometry.fill",
                    stylers: [
                    {
                        color: "#00ccff"
                    },
                    {
                        weight: 2.5
                    }
                    ]
                },
                {
                    featureType: "water",
                    elementType: "labels.text.fill",
                    stylers: [
                    {
                        color: "#ffffff"
                    }
                    ]
                }
                ]
      });
        })
    },
    resetCenter() {
      this.map.panTo({ lat: this.center.lat, lng: this.center.lng });
    },
    clearMarkers() {
      this.markers.forEach(marker => marker.setMap(null));
      this.markers = [];
    },
    /* setMarker() {
      const google = window.google;
      this.clearMarkers();

      const marker = new google.maps.Marker({
        position: { lat: this.center.lat, lng: this.center.lng },
        map: this.map
      });

      this.markers.push(marker);

      const infowindow = new google.maps.InfoWindow({
        content: `
                <div id="content">
                    <p id="firstHeading" class="firstHeading"><a href='https://www.google.com/maps/dir//Viikingite+k%C3%BCla,+Saula,+75117+Harju+maakond/@59.2224812,24.9625607'>Directions</a></p>
                </div>
                `,
        maxWidth: 200
      });

      marker.addListener("click", () => {
        if (this.infowindow) this.infowindow.close();
        infowindow.open(this.map, marker);
        this.infowindow = infowindow;
      });
    } */
  }
};
</script>

<style lang="scss">
#map {
  width: 100%;
  height: 30rem;
}
</style>

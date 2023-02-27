<template>
  <div class="video-frame">
    <div class="outer" @click="showVideo">
      <div class="play-button">
        <font-awesome-icon icon="fa-solid fa-play" />
      </div>
    </div>
    <div class="frame-text">
      <div>
        <h2>{{ $t("about_us_video_heading") }}</h2>
        <p>
          {{ $t("about_us_video_paragraph") }}
        </p>
      </div>
    </div>
    <div class="frame-video"></div>
    <div class="overlay-video" :class="{ video: video }">
      <YouTube src="https://www.youtube.com/embed/Yngh1X63Nyo" ref="youtube" />
      <div class="closing">
        <ClosingButton @click="closeVideo" />
      </div>
    </div>
  </div>
</template>
<script>
import YouTube from "vue3-youtube";
import ClosingButton from "../Forms/buttons/ClosingButton.vue";

export default {
  name: "AboutVideo",
  components: { ClosingButton, YouTube },
  data() {
    return {
      video: false,
    };
  },
  methods: {
    closeVideo() {
      if (this.video) {
        this.video = false;
        this.$refs.youtube.stopVideo();
      }
    },
    showVideo() {
      if (!this.video) {
        this.video = true;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.video{
  width:80%;
}
.video-frame {
  text-align: center;
  margin: auto;
  width: 90%;
  display: flex;
  align-items: center;
  height: 50vh;
  position: relative;
  margin-top: 15%;
  .outer {
    z-index: 1;
    width: 115px;
    height: 115px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-270%, -50%);
    background-color: rgba(255, 255, 255, 0.178);
    padding: 10px;
    border-radius: 50%;
    &:hover {
      cursor: pointer;
    }
    .play-button {
      width: 100%;
      height: 100%;
      color: rgb(37, 98, 117);
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 25px;
      border-radius: 50%;
      border: -4px solid rgba(255, 255, 255, 0.199);
      svg {
        margin-left: 5px;
      }
      &:hover {
        color: orange;
      }
    }
  }
  .frame-text {
    width: 36.5%;
    height: 100%;
    background-color: rgb(37, 98, 117);
    display: flex;
    justify-content: right;
    align-items: center;
    div {
      width: 50%;
      margin-right: 5%;
      color: white;
      h2 {
        color: white;
      }
      p {
        width: 85%;
      }
    }
  }
  .frame-video {
    width: 64.5%;
    height: 100%;
    background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.199),
        rgba(0, 0, 0, 0.212),
        rgba(0, 0, 0, 0.233)
      ),
      url("@/assets/images/forspace_info.jpg") no-repeat center center/cover;
  }
  .overlay-video {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.836);
    display: none;
    justify-content: center;
    align-items: center;

    .closing {
      position: absolute;
      top: 3%;
      right: 3%;
      width: 40px;
      height: 40px;
    }
  }
  .video {
    display: flex;
  }
}
@media screen and (max-width: 1500px) {
  .outer {
    top: 18% !important;
    left: 10% !important;
    transform: translate(0, 0) !important;
  }
  .video-frame {
    flex-direction: column;
    height: 70vh;
  }
  .frame-text {
    width: 100% !important;
    height: 30vh !important;
  }
  .frame-video {
    width: 100% !important;
    height: 300px;
  }
}
</style>

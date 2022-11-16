<template lang="pug">
div
  v-app(style="height: 0px")
    div.text-xs-center
      v-dialog(v-model="dialog" width="90%" style="border-radius:20px !important")
        template(v-slot:activator="{ on }")
          //- v-btn(color="red lighten-2" dark v-on="on") Click Me
        v-card
          v-card-title.background.headline.lighten-2(:class="{'background-blue' : dialogBlue}" primary-title style="color: rgb(42, 40, 40)") {{title}}
          v-card-text.background(:class="{'background-blue' : dialogBlue}")
            p.h2(v-if="h1") {{h1}}
            p.h3(v-if="h1Text") {{h1Text}}
            p.h3(v-if="h1FirstPunkt") {{h1FirstPunkt}}
            p.h3(v-if="h1SecondPunkt") {{h1SecondPunkt}}
            p.h3(v-if="h1ThreePunkt") {{h1ThreePunkt}}
            p.h3(v-if="h1ForPunkt") {{h1ForPunkt}}
            p.h3(v-if="h1FivePunkt") {{h1FivePunkt}}
            p.h3(v-if="h1SixPunkt") {{h1SixPunkt}}
            p.h3(v-if="h1SevenPunkt") {{h1SevenPunkt}}
            p.h3(v-if="h1EightPunkt") {{h1EightPunkt}}
            p.h3(v-if="h1NinePunkt") {{h1NinePunkt}}
            p.h3(v-if="h1TenPunkt") {{h1TenPunkt}}
            p.h3(v-if="h1ElevenPunkt") {{h1ElevenPunkt}}
            p.h3(v-if="h1TwelvePunkt") {{h1TwelvePunkt}}
            p.h3(v-if="h1ThreetenPunkt") {{h1ThreetenPunkt}}
            p.h3(v-if="h1FortenPunkt") {{h1FortenPunkt}}
            p.h3(v-if="h1FeftenPunkt") {{h1FeftenPunkt}}
            p.h2(v-if="h2") {{h2}}
            p.h3(v-if="h2Text") {{h2Text}}
            p.h3(v-if="h2FirstPunkt") {{h2FirstPunkt}}
            p.h3(v-if="h2SecondPunkt") {{h2SecondPunkt}}
            p.h3(v-if="h2ThreePunkt") {{h2ThreePunkt}}
            p.h3(v-if="h2ForPunkt") {{h2ForPunkt}}
            p.h3(v-if="h2FivePunkt") {{h2FivePunkt}}
            p.h3(v-if="h2SixPunkt") {{h2SixPunkt}}
            p.h3(v-if="h2SevenPunkt") {{h2SevenPunkt}}
            p.h3(v-if="h2EightPunkt") {{h2EightPunkt}}
            p.h3(v-if="h2NinePunkt") {{h2NinePunkt}}
            p.h3(v-if="h2TenPunkt") {{h2TenPunkt}}
            p.h3(v-if="h2ElevenPunkt") {{h2ElevenPunkt}}
            p.h3(v-if="h2TwelvePunkt") {{h2TwelvePunkt}}
            p.h3(v-if="h2ThreetenPunkt") {{h2ThreetenPunkt}}
            p.h3(v-if="h2FortenPunkt") {{h2FortenPunkt}}
            p.h3(v-if="h2FeftenPunkt") {{h2FeftenPunkt}}
            p.h2(v-if="h3") {{h3}}
            p.h3(v-if="h3FirstPunkt") {{h3FirstPunkt}}
            p.h3(v-if="h3SecondPunkt") {{h3SecondPunkt}}
            p.h3(v-if="h3ThreePunkt") {{h3ThreePunkt}}
            p.h3(v-if="h3ForPunkt") {{h3ForPunkt}}
            p.h3(v-if="h3FivePunkt") {{h3FivePunkt}}
            p.h3(v-if="h3SixPunkt") {{h3SixPunkt}}
            p.h3(v-if="h3SevenPunkt") {{h3SevenPunkt}}
            p.h3(v-if="h3EightPunkt") {{h3EightPunkt}}
            p.h3(v-if="h3NinePunkt") {{h3NinePunkt}}
            p.h3(v-if="h3TenPunkt") {{h3TenPunkt}}
            p.h3(v-if="h3ElevenPunkt") {{h3ElevenPunkt}}
            p.h3(v-if="h3TwelvePunkt") {{h3TwelvePunkt}}
            p.h3(v-if="h3ThreetenPunkt") {{h3ThreetenPunkt}}
            p.h3(v-if="h3FortenPunkt") {{h3FortenPunkt}}
            p.h3(v-if="h3FeftenPunkt") {{h3FeftenPunkt}}
            p.h3(v-if="h3SixtenPunkt") {{h3SixtenPunkt}}
            p.h3(v-if="h3SeventenPunkt") {{h3SeventenPunkt}}
            p.h3(v-if="h3EighttenPunkt") {{h3EighttenPunkt}}
            p.h3(v-if="h3NinetenPunkt") {{h3NinetenPunkt}}
            p.h3(v-if="h3TwentenPunkt") {{h3TwentenPunkt}}
            p.h3(v-if="h3TwentenOnePunkt") {{h3TwentenOnePunkt}}
            p.h3(v-if="h3TwentenTwoPunkt") {{h3TwentenTwoPunkt}}
            p.h3(v-if="h3TwentenThreePunkt") {{h3TwentenThreePunkt}}
            p.h3(v-if="h3TwentenForPunkt") {{h3TwentenForPunkt}}
            p.h3(v-if="h3TwentenFivePunkt") {{h3TwentenFivePunkt}}
            p.h3(v-if="h3TwentenSixPunkt") {{h3TwentenSixPunkt}}
            p.h3(v-if="h3TwentenSevenPunkt") {{h3TwentenSevenPunkt}}
            p.h3(v-if="h3TwentenEightPunkt") {{h3TwentenEightPunkt}}
            p.h3(v-if="h3TwentenNinePunkt") {{h3TwentenNinePunkt}}
            p.h3(v-if="h3ThreeteenPunkt") {{h3ThreeteenPunkt}}
            p.h3(v-if="h3ThreeteOnePunkt") {{h3ThreeteOnePunkt}}
            p.h3(v-if="h3ThreeteTwoPunkt") {{h3ThreeteTwoPunkt}}
            p.h3(v-if="h3ThreeteThreePunkt") {{h3ThreeteThreePunkt}}
            p.h3(v-if="h3ThreeteForPunkt") {{h3ThreeteForPunkt}}
            p.h3(v-if="h3ThreeteFivePunkt") {{h3ThreeteFivePunkt}}
            p.h3(v-if="h3ThreeteSixPunkt") {{h3ThreeteSixPunkt}}
            p.h3(v-if="h3ThreeteSevenPunkt") {{h3ThreeteSevenPunkt}}
            p.h3(v-if="h3ThreeteEightPunkt") {{h3ThreeteEightPunkt}}
            p.h3(v-if="h3ThreeteNinePunkt") {{h3ThreeteNinePunkt}}
            p.h3(v-if="h3ForteenPunkt") {{h3ForteenPunkt}}
            p.h3(v-if="h3ForteOnePunkt") {{h3ForteOnePunkt}}
            p.h3(v-if="h3ForteTwoPunkt") {{h3ForteTwoPunkt}}
            p.h3(v-if="h3ForteThreePunkt") {{h3ForteThreePunkt}}
            p.h3(v-if="h3ForteForPunkt") {{h3ForteForPunkt}}
            p.h3(v-if="h3ForteFivePunkt") {{h3ForteFivePunkt}}
            p.h3(v-if="h3ForteSixPunkt") {{h3ForteSixPunkt}}
            p.h3(v-if="h3ForteSevenPunkt") {{h3ForteSevenPunkt}}
          v-divider
          v-card-actions.background(:class="{'background-blue' : dialogBlue}")
            v-spacer
            //- v-btn(color="primary" flat @click="closeDialog") Закрыть
            div.img-back(@click="closeDialog")
              img.img-back(src="@/assets/training-page/free-icon-right-arrow-5166431.png")
</template>

<script>
export default {
  name: "DialogWindow",
  data () {
    return {
      
    }
  },
  props: {
    h1: null,
    h2: null,
    h3: null,
    h1Text: null,
    h1FirstPunkt: null,
    h1SecondPunkt: null,
    h1ThreePunkt: null,
    h1ForPunkt: null,
    h1FivePunkt: null,
    h1SixPunkt: null,
    h1SevenPunkt: null,
    h1EightPunkt: null,
    h1NinePunkt: null,
    h1TenPunkt: null,
    h1ElevenPunkt: null,
    h1TwelvePunkt: null,
    h1ThreetenPunkt: null,
    h1FortenPunkt: null,
    h1FeftenPunkt: null,
    h2Text: null,
    h2FirstPunkt: null,
    h2SecondPunkt: null,
    h2ThreePunkt: null,
    h2ForPunkt: null,
    h2FivePunkt: null,
    h2SixPunkt: null,
    h2SevenPunkt: null,
    h2EightPunkt: null,
    h2NinePunkt: null,
    h2TenPunkt: null,
    h2ElevenPunkt: null,
    h2TwelvePunkt: null,
    h2ThreetenPunkt: null,
    h2FortenPunkt: null,
    h2FeftenPunkt: null,
    h3FirstPunkt: null,
    h3SecondPunkt: null,
    h3ThreePunkt: null,
    h3ForPunkt: null,
    h3FivePunkt: null,
    h3SixPunkt: null,
    h3SevenPunkt: null,
    h3EightPunkt: null,
    h3NinePunkt: null,
    h3TenPunkt: null,
    h3ElevenPunkt: null,
    h3TwelvePunkt: null,
    h3ThreetenPunkt: null,
    h3FortenPunkt: null,
    h3FeftenPunkt: null,
    h3SixtenPunkt: null,
    h3SeventenPunkt: null,
    h3EighttenPunkt: null,
    h3NinetenPunkt: null,
    h3TwentenPunkt: null,
    h3TwenteOnePunkt: null,
    h3TwenteTwoPunkt: null,
    h3TwenteThreePunkt: null,
    h3TwenteForPunkt: null,
    h3TwenteFivePunkt: null,
    h3TwenteSixPunkt: null,
    h3TwenteSevenPunkt: null,
    h3TwenteEightPunkt: null,
    h3TwenteNinePunkt: null,
    h3ThreeteenPunkt: null,
    h3ThreeteOnePunkt: null,
    h3ThreeteTwoPunkt: null,
    h3ThreeteThreePunkt: null,
    h3ThreeteForPunkt: null,
    h3ThreeteFivePunkt: null,
    h3ThreeteSixPunkt: null,
    h3ThreeteSevenPunkt: null,
    h3ThreeteEightPunkt: null,
    h3ThreeteNinePunkt: null,
    h3ForteenPunkt: null,
    h3ForteenOnePunkt: null,
    h3ForteenTwoPunkt: null,
    h3ForteenThreePunkt: null,
    h3ForteenForPunkt: null,
    h3ForteenFivePunkt: null,
    h3ForteenSixPunkt: null,
    h3ForteenSevenPunkt: null,
    dialog: Boolean,
    dialogBlue: Boolean,
    text: null,
    title: null, 
  },
  methods: {
    closeDialog() {
      this.$emit('closeDialog')
    }
  }
}
</script>

<style scoped>
p {
  color: rgb(42, 40, 40);
}
hr {
  display: none;
}
.img-back {
  cursor: pointer;
  width: 40px;
  height: 40px;
}
.background {
  background-color: #ffc17d;
}
.background-blue {
  background-color: #7ea8c5;
}
</style>
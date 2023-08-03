<template>
    <footer class="footer">
        <div class="control-panel">
            <div class="container flex center just-btwn">
                <img 
                    src="@/assets/img/svg/arrow-back.svg" 
                    alt="Arrow back" 
                    class="arrow-back-img"
                    :class="isNotTheFirstQuestion ? 'active' : ''"
                    @click="switchToPreviousQuestion"
                >
                <div class="btn-wrapper flex center">
                    <MyButton 
                        class="btn btn-next flex center just-center" 
                        disabled="true"
                        @click="switchToNextQuestion"
                    >
                        Next  
                        <img src="@/assets/img/svg/arrow-next.svg" alt="Arrow next" class="arrow-next-img">
                    </MyButton>
                </div>
            </div>
        </div>
        <div class="progress-wrapper">
            <div class="container flex center">
                <p class="footer-text flex center">
                    Passed:&nbsp;<span class="progress-percentage">0%</span>
                </p>
                <div class="progress-bar">
                    <div class="progress-bar-line"></div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import MyButton from './UI/MyButton.vue';

const props = defineProps({
    isNotTheFirstQuestion: {
        Type: Boolean
    },
})

const emit = defineEmits(['switchToNextQuestion', 'switchToPreviousQuestion'])

const switchToNextQuestion = () => {
    emit('switchToNextQuestion')
}

const switchToPreviousQuestion = () => {
    emit('switchToPreviousQuestion')
}
</script>

<style>
/*==== FOOTER =====================*/
.footer {
  width: 100%;
}
.progress-wrapper {
  border-top: 1px solid #ccc;
  padding: 1.5rem 0;
  background-color: #fff;
}
.footer-text {
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.5;
  color: #555;
  margin-right: 10px;
}
.footer-text span {
  font-weight: 700;
  font-size: 1.2rem;
  color: #425EEF;
}
.progress-bar {
  position: relative;
  width: 100%;
  height: 1rem;
  background-color: #F0F3FE;
  border-radius: 4px;
  overflow: hidden;
}
.progress-bar-line {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 0;
  background: #425EEF;
  transition: .3s;
}
</style>
<template>
    <div class="quiz-step flex column active">
        <div class="question-wrapper">
            <div class="container flex center">
                <div class="question-number">
                    {{  }}
                </div>
                <h3 class="question-name">
                    {{ question.title }}
                </h3>
            </div>
        </div>
        <div class="answer-wrapper">
            <div class="container">
                <div class="form-group">
                    <input type="text" name="Name" placeholder="Enter your name or nickname" class="form-control text" id="el-0101" required>
                    <label for="el-0101"></label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'QuizStep',
    props: {
        questions: {
            type: Array,
            required: true
        },
        question: {
            type: Object,
            required: true
        }
    }
}
</script>

<style>

</style>
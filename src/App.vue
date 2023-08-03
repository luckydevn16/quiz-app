<script setup>
import { ref, computed } from 'vue';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import MessageModal from './components/UI/MessageModal.vue';
import MyInput from './components/UI/MyInput.vue';
import MyButton from './components/UI/MyButton.vue';
import ResultsTable from './components/ResultsTable.vue';
import { useQuestionsStore } from './stores/questions';

const questionsStore = useQuestionsStore();

let isChecked = questionsStore.isChecked;
let isModalActive = ref(false);
let isNotTheFirstQuestion = false;
let isInputValidated = false;
let currentQuestion = 0;
let question = '';
let answer = '';
let trafficCheckboxesChecked = [];
let verticalCheckboxesChecked = [];
let addedItemsList = ref([]);
let addedItemsValuesList = [];
let quizObject = {};

const btnAble = () => {
    document.querySelector('.btn.btn-next').disabled = false;
    document.querySelector('.btn.btn-next').style.opacity = '1';
}
    
const btnDisable = () => {
    document.querySelector('.btn.btn-next').disabled = true;
    document.querySelector('.btn.btn-next').style.opacity = '0.5';
}

const inputChanging = (e) => {
    let currentInput = e.target;

    if (currentInput.name === "Name" || currentInput.name === "Login") {
        if (currentInput.value.trim() !== '') {
            currentInput.classList.add('valid');
            btnAble();
        } else {
            currentInput.classList.remove('valid');
            btnDisable();
        }
    }

    if (currentInput.name === "Email") {
        if (currentInput.value.trim() !== '' && currentInput.value.trim().includes('@') && currentInput.value.trim().includes('.')) {
            btnAble();
            currentInput.classList.add('valid');
        } else {
            btnDisable();
            currentInput.classList.remove('valid');
        }
    }

    if (currentInput.type === "checkbox") {
        if (currentInput.checked) {
            btnAble();
            if (currentInput.name === "Traffic") {
                trafficCheckboxesChecked.push(currentInput.value);
            } else if (currentInput.name === "Vertical") {
                verticalCheckboxesChecked.push(currentInput.value);
            }
        } else if (trafficCheckboxesChecked.length || verticalCheckboxesChecked.length) {
            if (currentInput.name === "Traffic") {
                trafficCheckboxesChecked.splice(trafficCheckboxesChecked.indexOf(currentInput.value), 1);
                if (!trafficCheckboxesChecked.length) {
                    btnDisable();
                }
            } else if (currentInput.name === "Vertical") {
                verticalCheckboxesChecked.splice(verticalCheckboxesChecked.indexOf(currentInput.value), 1);
                if (!verticalCheckboxesChecked.length) {
                    btnDisable();
                }
            } 
        } 
    }

    if (currentInput.name === 'Advertiser') {
        if (currentInput.value.trim()) {
            document.querySelector('.add-btn').disabled = false;
        } else {
            document.querySelector('.add-btn').disabled = true;
        }
    }

    if (currentInput.name === 'Team') {
        if (currentInput.value.trim()) {
            btnAble();
            currentInput.classList.add('valid');
        } else {
            btnDisable();
            currentInput.classList.remove('valid');
        }
    }
}

const additionInputShow = () => {
    document.querySelectorAll('.addition-input-wrapper').forEach((el) => {
        el.classList.add('is-visible');
    });
}

const additionInputHide = () => {
    document.querySelectorAll('.addition-input-wrapper').forEach((el) => {
        el.classList.remove('is-visible');
    });
}

const inputClickHandler = (e) => {
    if (e.target.type == "radio") {
        additionInputShow();
    } 
    else if (e.target.type == "checkbox") {
        btnAble();
    } 
}

const switchToNextQuestion = () => {
    if (questionsStore.quizSteps[currentQuestion].number < questionsStore.quizSteps.length) {
        questionsStore.quizSteps[currentQuestion].isActive = false;
        questionsStore.quizSteps[currentQuestion + 1].isActive = true;
        btnDisable();
        currentQuestion += 1;
        isChecked = false;
        isInputValidated = false;
        isNotTheFirstQuestion = true;
        additionInputHide();
        progressBarUpdate();
    } else {
        progressBarUpdate();
        isModalActive.value = true;
    }
}

const switchToPreviousQuestion = () => {
    if (questionsStore.quizSteps[currentQuestion].number > 1) {
        questionsStore.quizSteps[currentQuestion].isActive = false;
        questionsStore.quizSteps[currentQuestion - 1].isActive = true;
        btnDisable();
        currentQuestion -= 1;
        isChecked = false;
        if (questionsStore.quizSteps[currentQuestion].number === 1) {
            isNotTheFirstQuestion = false;
        }
        progressBarUpdate();
    } else {
        return false;
    }
}

const listMessageHiding = () => {
    questionsStore.quizSteps[currentQuestion].isListMessageVisible = false;
    // document.querySelector('.text-secondary.list-message').style.display = 'none';
}

const listMessageShowing = () => {
    questionsStore.quizSteps[currentQuestion].isListMessageVisible = true;
    // document.querySelector('.text-secondary.list-message').style.display = 'block';
}

const addBtnClick = () => {
    if (document.querySelector('.adv-input').value) {
        addedItemsList.value.push(
            {
                id: document.querySelector('.adv-input').value,
                value: document.querySelector('.adv-input').value
            }
        ); 
        console.table(addedItemsList.value);
        addedItemsValuesList.push(document.querySelector('.adv-input').value);
        document.querySelector('.adv-input').value = '';
        isInputValidated = true;
        listMessageHiding();
        btnAble();
    } else {
        return false;
    }
}

const deleteAddedItem = (e) => {
    e.target.parentElement.remove();
    let itemToDelete = addedItemsValuesList.indexOf(e.target.parentElement.id);
    addedItemsList.value.splice(itemToDelete, 1);
    addedItemsValuesList.splice(itemToDelete, 1);

    if (addedItemsValuesList.length === 0) {
        btnDisable();
        listMessageShowing();
    }
}

const dataRecording = (event) => {
    question = event.target.name;
    answer = event.target.value.trim();
    quizObject[question] = answer;

    if (event.target.name === "Traffic") {
        quizObject[question] = trafficCheckboxesChecked; 
    }

    if (event.target.name === "Vertical") {
        quizObject[question] = verticalCheckboxesChecked; 
    }

    if (event.target.name === "Advertiser") {
        quizObject[question] = addedItemsValuesList; 
    }
    console.table(quizObject);
}

const progressBarUpdate = () => {
    document.querySelector('.progress-bar-line').style.width = 100 / questionsStore.quizSteps.length * currentQuestion + '%';
    document.querySelector('.progress-percentage').innerText = Math.ceil(100 / questionsStore.quizSteps.length * currentQuestion) + '%';
}

const closeModal = () => {
    isModalActive.value = false;
}

const refreshPage = () => {
    document.location.reload();
}
</script>

<template>
<div class="main-wrapper flex column">
    <AppHeader />
    <main class="main">
        <form 
            class="main-form" 
            id="mainForm" 
            @change="dataRecording"
        >
            <div 
                v-for="quizStep in questionsStore.quizSteps"
                v-show="quizStep.isActive" 
                :key="quizStep.number" 
                :class="quizStep.class"
            >
                <div class="question-wrapper">
                    <div class="container flex center">
                        <div class="question-number">
                            {{ quizStep.number }}.
                        </div>
                        <h3 class="question-name">
                            {{ quizStep.question }}
                        </h3>
                        <p class="text-secondary" v-if="quizStep.isMultiple">
                            *(Multiple choice available)
                        </p>
                    </div>
                </div>
                <div class="answer-wrapper">
                    <div class="container">
                        <p class="text-secondary list-message" v-if="quizStep.isListMessageVisible">
                            Here will be a list of advertisers ...
                        </p>
                        <ul class="added-items-list" v-if="quizStep.isList">
                            <li 
                                class="added-list-item flex center just-btwn"
                                v-for="addedItem in addedItemsList"
                                :key="addedItem.id"
                                :id="addedItem.id"
                            >
                                {{ addedItem.value }}
                                <MyButton 
                                    class="delete-btn flex center just-center" 
                                    title="Delete"
                                    @click.prevent="deleteAddedItem"
                                ></MyButton>
                            </li>
                        </ul>
                        <div :class="quizStep.inputWrapperClass">
                            <div v-for="input in quizStep.inputs" :key="input.id" :class="input.groupClass">
                                <MyInput 
                                    :type="input.type" 
                                    :name="input.name" 
                                    :placeholder="input.placeholder" 
                                    :class="input.inputClass" 
                                    :id="input.id" 
                                    :value="input.value"
                                    :required="input.isRequired"
                                    :checked="input.checked"
                                    @click="inputClickHandler"
                                    @input="inputChanging"
                                />
                                <label :for="input.id">
                                    {{ input.value }}
                                </label>
                                <MyButton 
                                    v-if="quizStep.isList" 
                                    class="add-btn" 
                                    title="Додати"
                                    @click.prevent="addBtnClick"
                                    disabled="true"
                                ></MyButton>
                            </div>
                        </div>
                        <div class="addition-input-wrapper">
                            <h4 class="addition-input-heading">
                                Your login
                            </h4>
                            <div class="form-group">
                                <MyInput 
                                    type="text" 
                                    name="Login" 
                                    placeholder="Enter your login" 
                                    class="form-control text" 
                                    id="el-0205" 
                                    required
                                    @input="inputChanging"
                                />
                                <label for="el-0205"></label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </main>
    <AppFooter 
       @switchToNextQuestion="switchToNextQuestion"
       @switchToPreviousQuestion="switchToPreviousQuestion"
       :isNotTheFirstQuestion="isNotTheFirstQuestion"
    />
    <MessageModal v-if="isModalActive">
        <h3 class="modal-heading">Results:</h3>
        <ResultsTable class="results-table">
            <tr>
                <th>Your name:</th>
                <td>
                    <MyInput type="text" class="table-input" :value="quizObject.Name" />
                </td>
            </tr>
            <tr>
                <th>Prefered connection:</th>
                <td>
                    <MyInput type="text" class="table-input" :value="quizObject.Connection" />
                </td>
            </tr>
            <tr>
                <th>Login:</th>
                <td>
                    <MyInput type="text" class="table-input" :value="quizObject.Login" />
                </td>
            </tr>
            <tr>
                <th>Your email:</th>
                <td>
                    <MyInput type="text" class="table-input" :value="quizObject.Email" />
                </td>
            </tr>
            <tr>
                <th>Your ad sources:</th>
                <td>
                    <MyInput type="text" class="table-input" :value="quizObject.Traffic.join(', ')" />
                </td>
            </tr>
            <tr>
                <th>Occupied vertical:</th>
                <td>
                    <MyInput type="text" class="table-input" :value="quizObject.Vertical.join(', ')" />
                </td>
            </tr>
            <tr>
                <th>Advertisers you've worked with:</th>
                <td>
                    <MyInput type="text" class="table-input" :value="quizObject.Advertiser.join(', ')" />
                </td>
            </tr>
            <tr>
                <th>Team size:</th>
                <td>
                    <MyInput type="text" class="table-input" :value="quizObject.Team" />
                </td>
            </tr>
        </ResultsTable>
        <MyButton class="btn" @click="refreshPage">
            OK
        </MyButton>
    </MessageModal>
</div>
</template>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
/*==== VARIABLES ===============*/
:root {
    --main-bg-color: #F1F1F1;
    --main-text-color: #111;
    --font-primary: 'Nexa';
}
/*==== COMMON =================*/
html {
    overflow-x: hidden;
    scroll-behavior: smooth;
}
body {
    min-height: 100vh;
    overflow-x: hidden;
    font-family: var(--font-primary), 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1rem;
    background-color: var(--main-bg-color);
    color: var(--main-text-color);
}
a {
    color: inherit;
    text-decoration: none;
}
.container {
    width: 90%;
    max-width: 1280px;
    margin: 0 auto;
}
.flex {
    display: flex;
}
.wrap {
    flex-wrap: wrap;
}
.no-wrap {
    flex-wrap: nowrap !important;
}
.column {
    flex-direction: column;
}
.center {
    align-items: center;
}
.just-btwn {
    justify-content: space-between;
}
.just-center {
    justify-content: center;
}
.flex-end {
    justify-content: flex-end;
}
.main-wrapper {
  min-height: 100vh;
}
.main {
  flex: 1;
}
</style>

import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useQuestionsStore = defineStore('questions', () => {
    let isChecked = false;

    const quizSteps = ref([
        {
            number: 1,
            question: "Enter your name or nickname",
            class: "quiz-step flex column",
            inputWrapperClass: "null",
            isMultiple: false,
            isActive: true,
            inputs: [
                {
                    id: 'el-0101',
                    type: 'text',
                    name: 'Name',
                    placeholder: "Enter your name or nickname",
                    groupClass: "form-group",
                    inputClass: "form-control text",
                    isRequired: true,
                    value: null,
                    checked: isChecked
                }
            ]
        },
        {
            number: 2,
            question: "Specify a convenient way of communication",
            class: "quiz-step flex column",
            inputWrapperClass: "form-group-wrapper flex wrap just-btwn",
            isMultiple: false,
            isActive: false,
            inputs: [
                {
                    id: 'el-0201',
                    type: 'radio',
                    name: 'Connection',
                    placeholder: null,
                    groupClass: "form-group radio",
                    inputClass: "form-control radio",
                    isRequired: false,
                    value: "Skype",
                    checked: isChecked
                },
                {
                    id: 'el-0202',
                    type: 'radio',
                    name: 'Connection',
                    placeholder: null,
                    groupClass: "form-group radio",
                    inputClass: "form-control radio",
                    isRequired: false,
                    value: "Telegram",
                    checked: isChecked
                },
                {
                    id: 'el-0203',
                    type: 'radio',
                    name: 'Connection',
                    placeholder: null,
                    groupClass: "form-group radio",
                    inputClass: "form-control radio",
                    isRequired: false,
                    value: "WeChat",
                    checked: isChecked
                },
                {
                    id: 'el-0204',
                    type: 'radio',
                    name: 'Connection',
                    placeholder: null,
                    groupClass: "form-group radio",
                    inputClass: "form-control radio",
                    isRequired: false,
                    value: "WhatsApp",
                    checked: isChecked
                },
            ]
        },
        {
            number: 3,
            question: "Enter your email",
            class: "quiz-step flex column",
            inputWrapperClass: "null",
            isMultiple: false,
            isActive: false,
            inputs: [
                {
                    id: 'el-0301',
                    type: 'email',
                    name: 'Email',
                    placeholder: "Enter your email",
                    groupClass: "form-group",
                    inputClass: "form-control email",
                    isRequired: true,
                    value: null,
                    checked: isChecked
                }
            ]
        },
        {
            number: 4,
            question: "Specify your ad source",
            class: "quiz-step flex column",
            inputWrapperClass: "form-group-wrapper flex wrap just-btwn",
            isMultiple: true,
            isActive: false,
            inputs: [
                {
                    id: 'el-0401',
                    type: 'checkbox',
                    name: 'Traffic',
                    placeholder: null,
                    groupClass: "form-group checkbox",
                    inputClass: "form-control checkbox",
                    isRequired: false,
                    value: "Facebook",
                    checked: isChecked
                },
                {
                    id: 'el-0402',
                    type: 'checkbox',
                    name: 'Traffic',
                    placeholder: null,
                    groupClass: "form-group checkbox",
                    inputClass: "form-control checkbox",
                    isRequired: false,
                    value: "Google",
                    checked: isChecked
                },
                {
                    id: 'el-0404',
                    type: 'checkbox',
                    name: 'Traffic',
                    placeholder: null,
                    groupClass: "form-group checkbox",
                    inputClass: "form-control checkbox",
                    isRequired: false,
                    value: "Email",
                    checked: isChecked
                },
                {
                    id: 'el-0407',
                    type: 'checkbox',
                    name: 'Traffic',
                    placeholder: null,
                    groupClass: "form-group checkbox",
                    inputClass: "form-control checkbox",
                    isRequired: false,
                    value: "In-app",
                    checked: isChecked
                },
                {
                    id: 'el-0408',
                    type: 'checkbox',
                    name: 'Traffic',
                    placeholder: null,
                    groupClass: "form-group checkbox",
                    inputClass: "form-control checkbox",
                    isRequired: false,
                    value: "TikTok",
                    checked: isChecked
                },
                {
                    id: 'el-0409',
                    type: 'checkbox',
                    name: 'Traffic',
                    placeholder: null,
                    groupClass: "form-group checkbox",
                    inputClass: "form-control checkbox",
                    isRequired: false,
                    value: "Telegram",
                    checked: isChecked
                },
                {
                    id: 'el-0411',
                    type: 'checkbox',
                    name: 'Traffic',
                    placeholder: null,
                    groupClass: "form-group checkbox w-100",
                    inputClass: "form-control checkbox",
                    isRequired: false,
                    value: "Another ad source",
                    checked: isChecked
                },
            ]
        },
        {
            number: 5,
            question: "What vertical do you work with?",
            class: "quiz-step flex column",
            inputWrapperClass: "form-group-wrapper flex wrap just-btwn",
            isMultiple: true,
            isActive: false,
            inputs: [
                {
                    id: 'el-0501',
                    type: 'checkbox',
                    name: 'Vertical',
                    placeholder: null,
                    groupClass: "form-group checkbox",
                    inputClass: "form-control checkbox",
                    isRequired: false,
                    value: "Forex / Crypto",
                    checked: isChecked
                },
                {
                    id: 'el-0504',
                    type: 'checkbox',
                    name: 'Vertical',
                    placeholder: null,
                    groupClass: "form-group checkbox",
                    inputClass: "form-control checkbox",
                    isRequired: false,
                    value: "NFT",
                    checked: isChecked
                },
                {
                    id: 'el-0505',
                    type: 'checkbox',
                    name: 'Vertical',
                    placeholder: null,
                    groupClass: "form-group checkbox",
                    inputClass: "form-control checkbox",
                    isRequired: false,
                    value: "COD",
                    checked: isChecked
                },
                {
                    id: 'el-0506',
                    type: 'checkbox',
                    name: 'Vertical',
                    placeholder: null,
                    groupClass: "form-group checkbox",
                    inputClass: "form-control checkbox",
                    isRequired: false,
                    value: "Insurance",
                    checked: isChecked
                },
                {
                    id: 'el-0507',
                    type: 'checkbox',
                    name: 'Vertical',
                    placeholder: null,
                    groupClass: "form-group checkbox",
                    inputClass: "form-control checkbox",
                    isRequired: false,
                    value: "Gaming",
                    checked: isChecked
                },
                {
                    id: 'el-0508',
                    type: 'checkbox',
                    name: 'Vertical',
                    placeholder: null,
                    groupClass: "form-group checkbox",
                    inputClass: "form-control checkbox",
                    isRequired: false,
                    value: "Other",
                    checked: isChecked
                },
            ]
        },
        {
            number: 6,
            question: "Specify the advertisers you work with",
            class: "quiz-step flex column",
            inputWrapperClass: "null",
            isMultiple: false,
            isList: true,
            isListMessageVisible: true,
            isActive: false,
            inputs: [
                {
                    id: 'el-0601',
                    type: 'text',
                    name: 'Advertiser',
                    placeholder: "Enter the names of the advertisers",
                    groupClass: "form-group",
                    inputClass: "form-control adv-input",
                    isRequired: false,
                    value: null,
                    checked: isChecked
                }
            ],
        },
        {
            number: 7,
            question: "Specify the size of the team",
            class: "quiz-step flex column",
            inputWrapperClass: "null",
            isMultiple: false,
            isList: false,
            isActive: false,
            inputs: [
                {
                    id: 'el-0701',
                    type: 'number',
                    name: 'Team',
                    placeholder: "Enter the size of the team",
                    groupClass: "form-group",
                    inputClass: "form-control text number",
                    isRequired: false,
                    value: null,
                    checked: isChecked
                }
            ]
        },
    ])

  return { quizSteps, isChecked }
})

<template>
  <input />
</template>

<script>
export default {
    name: 'MyInput'
}
</script>

<style>
.form-group {
  position: relative;
}
.form-control.text.advertiser {
  background-image: none !important;
}
/*==== INPUT-TEXT ===========================*/
.form-control.text,
.form-control.email,
.form-control.adv-input,
.form-control.number {
  width: 100%;
  height: 4rem;
  padding: 0 1.5rem;
  font-weight: 400;
  font-size: 1.1rem;
  border-radius: 8px;
  background-color: #F1F1F1;
  border: 1px solid #F1F1F1;
  outline: none;
  font-family: var(--font-primary), sans-serif;
  color: #493F64;
  position: relative;
  box-shadow: 0px 20px 50px -10px rgba(0, 0, 0, 0.2);
}
.form-control.text::-webkit-input-placeholder, .form-control.email::-webkit-input-placeholder, .form-control.adv-input::-webkit-input-placeholder, .form-control.number::-webkit-input-placeholder {
  color: #7a7a7a;
}
.form-control.text::-moz-placeholder, .form-control.email::-moz-placeholder, .form-control.adv-input::-moz-placeholder, .form-control.number::-moz-placeholder {
  color: #7a7a7a;
}
.form-control.text:-ms-input-placeholder, .form-control.email:-ms-input-placeholder, .form-control.adv-input:-ms-input-placeholder, .form-control.number:-ms-input-placeholder {
  color: #7a7a7a;
}
.form-control.text::-ms-input-placeholder, .form-control.email::-ms-input-placeholder, .form-control.adv-input::-ms-input-placeholder, .form-control.number::-ms-input-placeholder {
  color: #7a7a7a;
}
.form-control.text::placeholder,
.form-control.email::placeholder,
.form-control.adv-input::placeholder,
.form-control.number::placeholder {
  color: #7a7a7a;
}
.form-control.text:focus,
.form-control.email:focus,
.form-control.adv-input:focus,
.form-control.number:focus {
  border: 2px solid #ddd !important;
}
.form-control.text.valid,
.form-control.email.valid,
.form-control.number.valid {
  border: 2px solid #bee7d1 !important;
  background-image: url(../../assets/img/png/tick.png);
  background-size: 1.5rem;
  background-repeat: no-repeat;
  background-position: 99% 50%;
}
.form-control.adv-input.valid {
  background-image: none !important;
  border: 1px solid #404040;
}
/*==== INPUT-RADIO ===========================*/
.form-group.radio {
  width: 49.3%;
  margin-bottom: 1.5rem;
}
.form-group.radio input {
  display: none;
}
.form-group.radio label {
  display: flex;
  align-items: center;
  width: 100%;
  height: 4rem;
  padding: 0 1.5rem 0 3.75rem;
  font-weight: 400;
  font-size: 1rem;
  border-radius: 8px;
  background-color: #f1f1f1;
  border: 1px solid #f1f1f1;
  outline: none;
  font-family: var(--font-primary), sans-serif;
  color: #493F64;
  position: relative;
  cursor: pointer;
  box-shadow: 0px 20px 50px -10px rgba(0, 0, 0, 0.2);
}
.form-group.radio label::before {
  content: '';
  width: 1.5rem;
  height: 1.5rem;
  background-color: #d0ced2;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform:translateY(-50%);
  left: 1.25rem;
  margin-right: 1rem;
}
.form-group.radio input:checked~label {
  background-color: #e2ebf4;
  border: 1px solid #e2e6f4;
}
.form-group.radio input:checked~label::before {
  background-image: url('../../assets/img/png/tick.png');
  background-color: #000;
  background-repeat: no-repeat;
  background-size: 70%;
  background-position: center
}
/*==== INPUT-CHECKBOX ===============*/
.form-group.checkbox {
  width: 49.3%;
  margin-bottom: 1.5rem;
  height: 3.5rem;
}
.form-group.checkbox.w-100 {
  width: 100%;
  margin-bottom: 0;
}
.form-group.checkbox input {
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;
  opacity: 0;
}
.form-group.checkbox label {
  display: flex;
  align-items: center;
  width: 100%;
  height: 4rem;
  padding: 0 1.5rem 0 3.75rem;
  font-weight: 400;
  font-size: 1rem;
  border-radius: 8px;
  background-color: #f1f1f1;
  border: 1px solid #f1f1f1;
  outline: none;
  font-family: var(--font-primary), sans-serif;
  color: #333;
  position: relative;
  cursor: pointer;
  position: relative;
  transform: translateY(-50%);
  box-shadow: 0px 20px 50px -10px rgba(0, 0, 0, 0.2);
}
.form-group.checkbox label::before {
  content: '';
  width: 1.5rem;
  height: 1.5rem;
  background-color: #d0ced2;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform:translateY(-50%);
  left: 1.25rem;
  margin-right: 1rem;
}
.form-group.checkbox input:checked~label {
  background-color: #e2ebf4;
  border: 1px solid #e2ebf4;
}
.form-group.checkbox input:checked~label::before {
  background-image: url('../../assets/img/png/tick.png');
  background-color: #000;
  background-repeat: no-repeat;
  background-size: 70%;
  background-position: center
}
/*==== NUMBER INPUT =======================*/
.form-control.text.number::-webkit-inner-spin-button {
  -webkit-appearance: none;
  opacity: 0;
}
/*==== MEDIA QUERIES ==============*/
@media (max-width: 1600px) {
    .form-group input[type=text],
    .form-group input[type=email],
    .form-group input[type=number] {
        height: 3.2rem;
    }
    .form-group input[type=text].valid,
    .form-group input[type=email].valid,
    .form-group input[type=number].valid {
        background-size: 1.25rem;
    }
    .form-group.radio {
        margin-bottom: 1rem;
    }
    .form-group.radio label {
        height: 3.2rem;
        padding: 0 1.5rem 0 3rem;
    }
    .form-group.radio label::before {
        width: 1.25rem;
        height: 1.25rem;
        left: 1rem;
    }
    .form-group.checkbox {
        width: 49.3%;
        margin-bottom: 1.5rem;
        height: 4rem;
    }
    .form-group.checkbox {
        width: 49.3%;
        margin-bottom: 1.5rem;
        height: 2.6rem;
    }
    .form-group.checkbox label {
        height: 3.2rem;
        padding: 0 1.5rem 0 3rem;
    }
    .form-group.checkbox label::before {
        width: 1.25rem;
        height: 1.25rem;
        left: 1rem;
    }
}
@media (max-width: 576px) {
    .form-group input[type=text],
    .form-group input[type=email],
    .form-group input[type=number] {
        height: 3rem;
        font-size: 0.875rem;
        padding: 0 1rem;
    }
    .form-control.text.valid, 
    .form-control.email.valid {
        background-position: 98% 50%;
    }
    .form-group.radio {
        width: 100%;
        margin-bottom: 0.75rem;
    }
    .form-group.radio label::before {
        width: 1rem;
        height: 1rem;
        margin-right: 0.5rem;
    }
    .form-group.radio label {
        height: 3rem;
        padding: 0 1.5rem 0 2.5rem;
        font-size: 0.875rem;
    }
    .form-group.checkbox {
        width: 100%;
        margin-bottom: 1rem;
        height: 2.8rem;
    }
    .form-group.checkbox label {
        height: 3rem;
        padding: 0 1.5rem 0 2.5rem;
        font-size: 0.875rem;
    }
    .form-group.checkbox label::before {
        width: 1rem;
        height: 1rem;
        left: 0.8rem;
    }
}
</style>
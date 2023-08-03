<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
    name: 'MyButton'
}
</script>

<style>
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14.5rem;
  min-height: 3rem;
  background: #425EEF;
  border-radius: 8px;
  font-family: var(--font-primary), sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  color: #fff;
  cursor: pointer;
  border: none;
  opacity: 0.5;
  box-shadow: 0px 20px 50px -10px rgba(0, 0, 0, 0.2);
  transition: .1s;
}
.btn:active {
  transform: scale(0.99);
}
.delete-btn {
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  background-color: transparent;
  border: none;
  cursor: pointer;
  background-image: url('../../assets/img/png/cancel.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 0.7rem;
  transition: all .2s ease;
}
.delete-btn:hover {
  background-color: rgba(0,0,0,.3);
}
.add-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 1%;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: rgb(46, 169, 58);
  color: #fff;
  cursor: pointer;
  border: none;
  background-image: url('../../assets/img/png/plus.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 0.85rem;
}
.add-btn:disabled {
  opacity: .5
}
/*==== MEDIA QUERIES ==============*/
@media (max-width: 1600px) {
    .add-btn {
        width: 2rem;
        height: 2rem;
        font-size: 1.2rem;
    }
}
@media (max-width: 576px) {
  .btn {
      width: 12rem;
      min-height: 2.5rem;
      font-size: 0.875rem;
  }
  .delete-btn {
      width: 2rem;
      height: 2rem;
      background-size: 0.7rem;
  }
  .add-btn {
      width: 1.5rem;
      height: 1.5rem;
      font-size: 1.2rem;
      right: 3%;
  }

}
</style>
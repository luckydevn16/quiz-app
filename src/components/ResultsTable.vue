<template>
  <table class="results-table">
    <slot></slot>
  </table>
</template>

<script>
export default {
    name: 'ResultsTable'
}
</script>

<style>
/*==== RESULTS TABLE ==============*/
.results-table {
  border-collapse: collapse;
  width: 100%;
  margin: 2rem 0;
  overflow-x: scroll;
}
.results-table td {
  border: 1px solid #ddd;
}
.results-table th {
  text-align: left;
  border: 1px solid #ddd;
  padding: 0.5rem 1rem;
}
.results-table td {
  opacity: .85;
  font-weight: 300;
}
.table-input {
  color: inherit;
  font-size: inherit;
  font-weight: inherit;
  font-family: inherit;
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  outline: none;
}
.table-input:focus {
  background-color: #facd6a;
  color: #5C4199;
}
@media (max-width: 576px) {
    .results-table {
        margin: 1rem 0;
        font-size: 0.9rem;
    }
    .results-table th {
        padding: 0.4rem 0.6rem;
    }
    .table-input {
        padding: 0.4rem 0.6rem;
        font-size: 0.85rem;
    }
}
</style>
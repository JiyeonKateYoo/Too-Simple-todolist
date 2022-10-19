<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <TitleView name="TO-DO-LiST"/>
  <!-- @<customEvent 이름>="실행되는 method이름" -->
  <to-do-input @add-to-do="addToDo" />
  <to-do-list :todos="todos" />
</template>

<script>
import TitleView from './components/TitleView.vue'
import ToDoInput from './components/ToDoInput.vue'
import ToDoList from './components/ToDoList.vue'

export default {
  name: 'App',
  components: {
    TitleView,
    ToDoInput,
    ToDoList
  } ,
  data() {
    return {
      todos: ['장 보기']
    }
  } ,
  methods: {
    addToDo(content) {
      this.todos.push(content)
    }
  }   
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>





<template>
  <div id="todoinput">
    <input type="text" v-model="content" />
    <button type="button" @click="addToDo">추가</button>
  </div>
</template>

<script>
/**
export default {
  data() {
    return {
      content: ''
    }
  },
  methods: {
    addToDo() {
      // emit: 자식컴포넌트에서 부모컴포넌트의 특정 이벤트를 발생시키는 기능
      // 1st 파라미터는 지정된 이벤트의 이름
      // 2nd 파라미터는 전달하고자하는 데이터의 이름 명시

v-model을 통해 할일내용을 content에 바인딩, 
 * button을 클릭시에 addToDo() 메서드가 실행. 
 * $emit을 통해 부모컴포넌트에 'add-to-do'라는 이름의 이벤트를 전달한다. 

alert('등록 하였습니다 :")')
      this.$emit('add-to-do', this.content)
      this.content = ''
    }
  }
}
*/


// props, emit 상위하위 컴포넌트간 데이터/이벤트를 전달하던 방식에서 -> vuex를 활용
export default {
  data() {
    return {
      content: ''
    }
  },
  methods: {
    addToDo() {
      // vuex commit
      this.$store.commit('addTodo', this.content)
      this.content = ''
    }
  }
}
</script>

<style></style>


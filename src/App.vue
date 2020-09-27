<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <hr />
    <GenericButton @click="addCarPrefix" label="Ajouter un prefix voiture 🚘" />
    <hr />
    <Rating :rating="1" alt="coolItem" />
    <hr />
    <section>
      <h2>User cards</h2>
      <UserCard v-for="(user, i) in state.users" :key="i" :user="user" />
    </section>
    <hr />
    <UserForm @createUser="createUser" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { uuid } from "uuidv4";
import {
  defineComponent,
  reactive /*ref, toRefs*/,
  Ref,
  ref
} from "@vue/composition-api";
import GenericButton from "./components/GenericButton.vue";
import Rating from "./components/Rating.vue";
import UserCard from "./components/UserCard.vue";
import UserForm from "./components/UserForm.vue";
import { usersMap } from "./assets/data";
import { NewUser, User } from "./types";

export default defineComponent({
  name: "App",
  components: {
    UserCard,
    Rating,
    UserForm,
    GenericButton
  },
  setup() {
    // const users = ref(data.users); // ref = donnée reactive
    const state = reactive<{ users: User[] }>({
      users: Object.values(usersMap).map(user => reactive(user))
    });

    const createUser = (newUser: Ref<NewUser>) => {
      const user: User = reactive({
        id: uuid(),
        ...newUser.value
      });
      state.users.push(user);
    };

    function addCarPrefix() {
      // change la reactive
      state.users = state.users.map(user => {
        user.fullName = "🚘 " + user.fullName;
        return user;
      });
    }
    return {
      state,
      createUser,
      addCarPrefix
    };
  }
});
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.second {
  background-color: red;
}
</style>

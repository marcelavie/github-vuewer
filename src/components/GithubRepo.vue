<template>
    <div>
      <v-row class="text-center">
        <v-col cols="2" v-if="user">
        <v-avatar><img :src='avatar'></v-avatar>
      </v-col>
        <v-col cols="5">
          <v-autocomplete
          v-model="user"
          label="Encontre seu usuário"
          :items="userlist"
          :loading="userloading"
          :search-input.sync="usersearch"
          item-text="login"
        />
        </v-col>
        <v-col cols="5">
          <v-select
            v-model="repo"
            :items="repolist"
            :loading="repoloading"
            item-text="name"
            label="Selecione o repositorio"
            return-object
            single-line
          ></v-select>
        </v-col>
      </v-row>
    </div>
  </template>
  
  <script>
  
    import {debouncerdecorator} from '@/helpers/debouncer.js'
    import {api} from '~api'
  
    export default {
      data: () => ({
        user: null,
        repo: null,
        usersearch: null,
        userlist: [],
        repolist: [],
        userloading: false,
        repoloading: false,
        avatar: null
      }),
      methods: {
        procuraUsuariosGithub: debouncerdecorator(async function () { // atenção: não use ()=>{} aqui. vai quebrar o decorator
          this.userloading = true
          const data = await api.search_users(this.usersearch)
          this.userlist = data.items
          this.avatar = this.userlist.map(user => user.avatar_url)
          this.userloading = false
        }, 500),
        async listaRepositorios(){
          this.repoloading = true
          const data = await api.lista_repos(this.user)
          this.repolist = data
          this.repoloading = false
        }
      },
      watch: {
        usersearch () {
          this.procuraUsuariosGithub()
        },
        user() {
          if(this.user){
            this.listaRepositorios()
          }
        },
        repo () {
          this.$emit('reposelected', this.repo)
        }
      }
    }
  </script>
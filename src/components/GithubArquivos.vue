<template>
  <v-container>
   <v-row>
     <v-col cols="12">
       <v-simple-table>
         <template v-slot:default>
           <thead>
             <tr>
               <th class="text-left">Arquivos</th>
             </tr>
           </thead>
           <tbody>
             <tr v-for="arquivo in arquivos" :key="arquivo.url">
               <td>{{ arquivo.name }}</td>
             </tr>
           </tbody>
         </template>
       </v-simple-table>
     </v-col>
   </v-row>
   <v-row>
     <v-col cols="12">
       <v-progress-circular indeterminate class="text-center" color="primary" v-if="loading"></v-progress-circular>
     </v-col>
   </v-row>
 </v-container>
</template>

<script>
 import { api } from '~api'

export default {
 props: ['repo'],
 data: () => ({
   arquivos: [],
   loading: false,
 }),
 methods: {
   async getFiles(){
     this.loading = true
     const files = await api.listaArquivos( this.repo.owner.login, this.repo.name)
   this.arquivos = this.arquivos.concat(files)
     this.loading = false
   }
 },
 watch: {
   repo(){
     this.arquivos = []
     this.getFiles()
   }
 }
}
</script>
<template>
  <v-form v-model="valid">
    <v-container>
      <h1>ข้อมูลพนักงาน</h1>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="name"
            :rules="Name"
            :counter="30"
            label="ชื่อ"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="30"
            label="นามสกุล"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="code"
            :rules="codeRules"
            :counter="10"
            label="รหัสพนักงาน"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <h1 class="mdi mdi-cup">ประเภทไวน์</h1>
      <v-radio-group v-model="column" class="primary--text" column>
        <v-radio
          label="ไวน์แดง (RED WINE)"
          value="ไวน์แดง (RED WINE)"
        ></v-radio>
        <v-radio
          label="ไวน์ขาว (WHITE WINE)"
          value="ไวน์ขาว (WHITE WINE)"
        ></v-radio>
        <v-radio
          label="ไวน์โรเซ่ (ROSE WINE)"
          value="ไวน์โรเซ่ (ROSE WINE)"
        ></v-radio>
        <v-radio
          label="ไวน์หวาน (DESSERT WINE)"
          value="ไวน์หวาน (DESSERT WINE)"
        ></v-radio>
        <v-radio
          label="สปาร์คกลิ้งไวน์ (SPARKLING WINE)"
          value="สปาร์คกลิ้งไวน์ (SPARKLING WINE)"
        ></v-radio>
      </v-radio-group>
      <h1 class="mdi mdi-cup">ยี่ห้อไวน์</h1>
      <v-radio-group v-model="brand" column>
        <v-radio
          label="Royal DeMaria รอยอลเดอมาเรีย"
          value="Royal DeMaria รอยอลเดอมาเรีย"
        ></v-radio>
        <v-radio
          label="Chateau d'Yquem 1787 ชาโต้ ดิแกม 1787"
          value="Chateau d'Yquem 1787 ชาโต้ ดิแกม 1787"
        ></v-radio>
        <v-radio
          label="Pinot Noir ปิโนต์นัวร์"
          value="Pinot Noir ปิโนต์นัวร์"
        ></v-radio>
        <v-radio label="Duckhorn" value="Duckhorn"></v-radio>
        <v-radio
          label="ALMAVIVA 2010 (อัลมาวีว่า)"
          value="ALMAVIVA 2010 (อัลมาวีว่า)"
        ></v-radio>
        <v-radio
          label="BATASIOLO MOSCATO SPUMANTE(บาตาซิโอโลมอสกาโต)"
          value="BATASIOLO MOSCATO SPUMANTE(บาตาซิโอโลมอสกาโต)"
        ></v-radio>
        <v-radio
          label="ZONIN PROSECCO BRUT(โซนินโพรเซคโค่บรูท)"
          value="ZONIN PROSECCO BRUT(โซนินโพรเซคโค่บรูท)"
        ></v-radio>
        <v-radio
          label="CASTELLO BANFI CHIANTI (กาสเตลโล บานฟี่ คีอานติ)"
          value="CASTELLO BANFI CHIANTI (กาสเตลโล บานฟี่ คีอานติ)"
        ></v-radio>
        <v-radio
          label="MONTES ALPHA CABERNET SAUVIGNON"
          value="MONTES ALPHA CABERNET SAUVIGNON"
        ></v-radio>
        <v-radio
          label="BOTTEGA PROSECCO GOLD BRUT"
          value="BOTTEGA PROSECCO GOLD BRUT"
        ></v-radio>
      </v-radio-group>

      <h1 class="mdi mdi-sale">ราคาสินค้า</h1>
      <v-text-field v-model="price" label="ราคา [ บาท ]" class="ma-2" />
      <v-btn color="success" class="mr-4" @click="addData"> ADD STOCK </v-btn>
    </v-container>
  </v-form>
</template>

<script>
import firebase from 'firebase/app'
import { db } from '~/plugins/firebaseConfig.js'
export default {
  data() {
    return {
      name: '',
      lastname: '',
      code: '',
      brand: null,
      column: null,
      price: '',
    }
  },
  methods: {
    addData() {
      // เก็บข้อมูล Input Text ใน collection MyText (มีหลาย document ข้อมูลจะเพิ่มขึ้นเรื่อย ๆ )
      const dataText = {
        name: this.name,
        lastname: this.lastname,
        code: this.code,
        column: this.column,
        brand: this.brand,
        price: this.price,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      }
      db.collection('ADDWINE')
        .doc()
        .set(dataText)
        .then(function () {
          console.log('Document successfully written! -> MyText')
        })
        .catch(function (error) {
          console.error('Error writing document: ', error)
        })
        .then(function () {
          alert('เพิ่มไวน์สำเร็จ')
        })
    },
    reset() {},
  },
}
</script>
<style>
.theme--dark.v-application {
  background-image: url('https://data.whicdn.com/images/324136504/original.gif');
  background-size: cover;
}
</style>

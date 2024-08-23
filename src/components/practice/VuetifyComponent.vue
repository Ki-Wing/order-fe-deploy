<template>
    <v-app-bar app>
        네비게이션 바
    </v-app-bar>

    <!-- v-container, v-row, v-col -->
    <v-container>
        <v-row>
            <v-col cols="8">
                HelloWorld1
            </v-col>
            <v-col cols="4">
                HelloWorld2
            </v-col>
        </v-row>

        <v-row>
            <!-- v-card -->
            <v-card>
                <!-- card-title(제목), card-text(내용) -->
                <v-card-title>
                    안내문구
                </v-card-title>
                <v-card-text>
                    안녕하세요..
                </v-card-text>
            </v-card>
        </v-row>
        <v-row>
            <v-simple-table>
                <thead>
                    <tr>
                        <th>이름</th>
                        <th>이메일</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>test1</td> <td>test1@test</td></tr>
                    <tr><td>test2</td> <td>test2@test</td></tr>
                </tbody>
            </v-simple-table>
        </v-row>
        <v-row>
            <v-card>
                <v-card-title>회원가입</v-card-title>
                <v-card-text>
                    <v-form>
                        <v-text-field
                            label="email"
                            type="email"
                            >   
                        </v-text-field>
                        <v-text-field
                            label="name"
                            type="text"
                            >
                        </v-text-field>
                        <v-text-field
                            label="password"
                            type="password"
                            >
                        </v-text-field>
                        <v-btn>
                        </v-btn>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-row>
    </v-container>

</template>

<script>
export default {

};
</script>
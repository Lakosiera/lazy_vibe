<script setup lang="ts">
</script>

<template>
    <div class="container-fluid py-3">
        <div class="container">
            <div class="card shadow">

                <div class="card-header p-2">
                    <div class="input-group">
                        <span class="input-group-text" id="basic-addon1">@</span>
                        <input type="text" class="form-control" placeholder="Подайте мне идею!" aria-label="Username"
                            aria-describedby="basic-addon1">
                    </div>
                </div>
                <div class="card-body p-0 row">
                    <div class="col _table-responsive">

                    <table class="table _table-sm _table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Идея</th>
                                <th scope="col">Описание</th>
                                <th scope="col">Сроки</th>
                            </tr>
                        </thead>
                        <tbody class="table-group-divider _text-nowrap _text-truncate">
                            <tr>
                                <th scope="row">1</th>
                                <td class="">Кормушка для кота</td>
                                <td class="">
                                    Хочу сделать умную кормушку для кота, которая будет давать еду по расписанию и отправлять мне фото в Telegram.
                                </td>
                                <td class="">1-2 месяца</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td class="">Программировать</td>
                                <td class="">Хочу найчиться программировать</td>
                                <td class="">1 год</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td class="">Владыка мира</td>
                                <td class="">Хочу стать повелителем мира!</td>
                                <td class="">1000 лет</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                </div>
            </div>

        </div>
    </div>
</template>
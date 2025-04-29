<script setup lang="ts">

</script>

<template>
    <div class="container-fluid py-3">
        <div class="container">
            <div class="row justify-content-md-center">
                <div class="col-lg-8">
                    <div class="card shadow">
                        <div class="card-body">
                            <h5 class="card-title text-center">Есть идея!</h5>

<form>
    <div class="mb-3">
        <label for="input1" class="form-label">Навание</label>
        <input type="text" class="form-control" id="input1" aria-describedby="help1">
        <div id="help1" class="form-text">Короткое название для отобажения</div>
    </div>
    <div class="mb-3">
        <label for="input2" class="form-label">Идея</label>
        <textarea class="form-control" id="input2" rows="6"  aria-describedby="help2"></textarea>
        <div id="help2" class="form-text">Описть идею своими слолвами</div>
    </div>

    <div class="d-grid gap-2">
        <button type="submit" class="btn btn-primary">Подумай за меня!</button>
        <button type="submit" class="btn btn-success">Поделиться идеей</button>
    </div>

    <div class="progress mt-3" role="progressbar" aria-label="Success striped example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
        <div class="bg-success progress-bar progress-bar-striped progress-bar-animated" style="width: 25%"></div>
    </div>
</form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
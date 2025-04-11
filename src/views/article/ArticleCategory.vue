<script setup>
import {
    Edit,
    Delete
} from '@element-plus/icons-vue'
import { ref } from 'vue'
const categorys = ref([
    {
        "id": 1,
        "categoryName": "11",
        "categoryAlias": "111",
        "createTime": "1111",
        "updateTime": "11111"
    },
    {
        "id": 2,
        "categoryName": "22",
        "categoryAlias": "222",
        "createTime": "2222",
        "updateTime": "22222"
    },
    {
        "id": 3,
        "categoryName": "33",
        "categoryAlias": "333",
        "createTime": "3333",
        "updateTime": "33333"
    }
])
import {articleCategoryListService} from '@/api/article.js'
const articleCategoryList = async () => {
    let result=await articleCategoryListService()
    categorys.value=result.data
}
articleCategoryList()
</script>
<template>
    <el-card class="page-container">
        <template #header>
            <div class="header">
                <span>文章分类</span>
                <div class="extra">
                    <el-button type="primary">添加分类</el-button>
                </div>
            </div>
        </template>
        <el-table :data="categorys" style="width: 100%">
            <el-table-column label="序号" width="100" type="index"> </el-table-column>
            <el-table-column label="分类名称" prop="categoryName"></el-table-column>
            <el-table-column label="分类别名" prop="categoryAlias"></el-table-column>
            <el-table-column label="操作" width="100">
                <template #default="{ row }">
                    <el-button :icon="Edit" circle plain type="primary" ></el-button>
                    <el-button :icon="Delete" circle plain type="danger"></el-button>
                </template>
            </el-table-column>
            <template #empty>
                <el-empty description="没有数据" />
            </template>
        </el-table>
    </el-card>
</template>

<style lang="scss" scoped>
.page-container {
    min-height: 100%;
    box-sizing: border-box;

    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}
</style>
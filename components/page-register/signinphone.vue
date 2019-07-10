<template>
  <div class="signinphone">
    <div class="form">
      <form>
        <label class="sel-label">国家/地区</label>
        <el-select v-model="value" placeholder="China" filterable class="sel-country">
          <el-option-group
            v-for="group in options"
            :key="group.label"
            :label="group.label"
          >
            <el-option
              v-for="item in group.options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-option-group>
        </el-select>
        <span class="prompt">成功注册帐号后，国家/地区将不能被修改</span>
        <label class="sel-label">手机号码</label>
        <el-input v-model="input1" placeholder="请输入手机号码" class="phone" @focus="onFocus2">
          <template slot="prepend">
            <el-select
              v-model="value1"
              placeholder="+86"
              filterable
              :filter-method="filterMethod"
              @blur="onBlur"
              @focus="onFocus"
            >
              <el-option-group
                v-for="group in list"
                :key="group.label"
                :label="group.label"
              >
                <el-option
                  v-for="item in group.options"
                  :key="item.value"
                  :label="item.pre"
                  :value="item.pre"
                >
                  <span style="float: left">{{ item.label }}</span>
                  <span style="float: right; color: #8492a6; font-size: 13px">{{ item.pre }}</span>
                </el-option>
              </el-option-group>
            </el-select>
          </template>
        </el-input>
        <span v-if="prompt" class="prompt warning">
          <i class="fa fa-info-circle" aria-hidden="true" />{{ prompt }}
        </span>
        <el-button class="submit" type="warning" @click="submitForm">
          注册
        </el-button>
      </form>
    </div>
    <div class="form-footer" @click="onFocus2">
      <el-checkbox v-model="checked">
        <span>
          注册帐号即表示您同意并愿意遵守小米 <strong>用户协议</strong> 和 <strong>隐私政策</strong>
        </span>
      </el-checkbox>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [{
        label: 'A',
        options: [{
          value: 'Andorra',
          label: 'Andorra',
          pre: '+376'
        }, {
          value: 'Afghanistan',
          label: 'Afghanistan',
          pre: '+93'
        }, {
          value: 'Anguilla',
          label: 'Anguilla',
          pre: '+3'
        }]
      }, {
        label: 'B',
        options: [{
          value: 'Bosnia and Herzegovina',
          label: 'Bosnia and Herzegovina',
          pre: '+355'
        }, {
          value: 'Barbados',
          label: 'Barbados',
          pre: '+377'
        }, {
          value: 'Belgium',
          label: 'Belgium',
          pre: '+1'
        }]
      }, {
        label: 'C',
        options: [{
          value: 'Canada',
          label: 'Canada',
          pre: '+7'
        }, {
          value: 'China',
          label: 'China',
          pre: '+86'
        }, {
          value: 'Cuba',
          label: 'Cuba',
          pre: '+9999'
        }]
      }],
      value: 'China',
      value1: '+86',
      input1: '',
      list: [],
      checked: false,
      showPrompt: false,
      prompt: ''
    }
  },
  methods: {
    submitForm(formName) {
      const self = this
      if (!self.checked) {
        self.prompt = '请您同意用户条款'
      } else if (!self.input1.match(/^1\d{10}$/)) {
        self.prompt = '请输入正确的手机号'
      } else {
        self.$axios.post('/user/signup', {
          phone: self.value1 + ' ' + self.input1
        }).then(({ status, data }) => {
          if (status === 200 && data.code === 0) {
            alert(`验证码: ${data.logCode}`)
            self.$emit('toVerify', self.value1 + ' ' + self.input1)
          } else {
            self.prompt = data.msg
          }
        })
      }
    },
    onFocus2() {
      this.prompt = ''
    },
    onFocus() {
      this.list = this.options
    },
    onBlur() {
      this.list = this.options
    },
    filterMethod(query) {
      if (query !== '') {
        setTimeout(() => {
          const tempArr = []
          this.options.forEach((item) => {
            const tempObj = {
              options: item.options.filter((item) => {
                return Object.keys(item).map((key) => {
                  return item[key]
                }).join(',').toLowerCase().indexOf(query.toLowerCase()) > -1
              }),
              label: item.label
            }
            if (tempObj.options.length > 0) {
              tempArr.push(tempObj)
            } else {
              return false
            }
          })
          this.list = tempArr
        }, 200)
      } else {
        this.list = this.options
      }
    }
  }
}
</script>

<style lang="stylus">
.signinphone
  .form
    width 332px
    margin 0 auto
    padding 30px 0
    position relative
    .sel-label, .sel-country, .prompt
      display block
    .sel-label
      padding-bottom 5px
  .form-footer
    text-align center
    margin-top 45px
    span
      color: #9d9d9d
    strong
      color #333
    .el-checkbox__input.is-checked.is-focus .el-checkbox__inner,
    .el-checkbox__input.is-checked .el-checkbox__inner
      background-color #ff6700
      border-color #ff6700
    .el-checkbox__input.is-focus .el-checkbox__inner
      border-color #ff6700
    .el-checkbox__inner
      width 20px
      height 20px
      border-radius: 50%
      &:after
        left: 7px
        top: 3px
        border: 2px solid #FFF
        border-left: 0;
        border-top: 0;
      &:hover
        border-color #ff6700
    .el-checkbox__label
      padding-left 5px
  .prompt
    margin-bottom 15px
    color: #666
  .submit
    width 100%
    border-radius 0
    background-color #ff6700
  .prompt.warning
    position absolute
    left: 0;
    bottom: 61px;
    font-size: 10px;
    color #ff6700
    .fa.fa-info-circle
      margin-right 5px
.sel-country
  margin-bottom 5px
  .el-input__inner
    border-radius 0
    border 1px solid #e8e8e8
  .el-input--suffix.is-focus .el-input__inner
      border-color: #e8e8e8
  .el-input__suffix
    width 40px
    border-left 1px solid #e8e8e8
    right 0
.phone
  margin-bottom 30px
  .el-input-group__prepend
    width 40px
    background-color #fff
  .el-input__inner, .el-input-group__prepend
    border-radius 0
</style>

<template>
    <div>
        <div class='bg-pink-1'>
            <div class='container mx-auto'>
                <div class='md:hidden sm:flex sm:justify-center'>
                    <div class='flex items-center text-xs justify-center'>
                        <div class='font-medium text-pink-2 cursor-pointer mr-4'>
                            กิจกรรม
                        </div>
                        <div class='font-medium text-pink-2 cursor-pointer'>
                            กระดานผู้นำท่องเที่ยว
                        </div>
                    </div>
                    <div class='flex items-center text-xs justify-center border-b mx-8 pb-4 border-pink-2'>
                        <div class='font-medium text-pink-2 cursor-pointer mr-4'>
                            การบ้านคุณภาพ
                        </div>
                        <div class='font-medium text-pink-2 cursor-pointer'>
                            พูดคุยการบ้าน/ติดต่อแอดมิน
                        </div>
                    </div>
                </div>

                <div class='flex justify-center relative w-full'>
                    <img src='../assets/image/Frame.png' alt='Frame' width='55%' />
                    <div class='absolute mt-6 xl:mt-[6.5rem] px-3 lg:px-[20rem]'>
                        <div class='text-xl xl:text-[55px] font-semibold text-center text-pink-2 mb-2 lg:mb-8'>
                            เปิดประสบการณ์ใหม่กับเรา
                        </div>
                        <div class='text-sm xl:text-[25px] text-pink-2 mb-3 text-center lg:leading-10'>
                            เว็บไซต์รวบรวมน้อง ๆ ไซด์ไลน์ สไตล์ฟิวแฟน ทะเลเรียกว่า Sea ช่วงเวลาดี ๆ เรียกว่า Fiwfans
                        </div>
                        <div class='hidden lg:block '>
                            <div
                                class='shadow-pink bg-white mt-5 xl:mt-16 py-2 pr-2 pl-6 rounded-full bg-opacity-[0.7] shadow-md flex justify-between items-center'>
                                <div class='border-r border-[#D85CB5] pr-5'>
                                    <div class='flex items-center'>
                                        <div class='text-pink-2 mr-1 text-sm'>
                                            คุณกำลังมองหา
                                        </div>
                                        <svg-icon
                                            name='eva_arrow-ios-downward-fill'
                                            width='20'
                                            height='20'
                                            class='text-pink-2'
                                        />
                                    </div>
                                    <div class='mt-2 text-sm'>
                                        ผู้หญิง
                                    </div>
                                </div>
                                <div class='border-r border-[#D85CB5] pr-5'>
                                    <div class='flex items-center'>
                                        <div class='text-pink-2 mr-1 text-sm'>
                                            ช่วงอายุที่คุณต้องการค้นหา
                                        </div>
                                        <svg-icon
                                            name='eva_arrow-ios-downward-fill'
                                            width='20'
                                            height='20'
                                            class='text-pink-2'
                                        />
                                    </div>
                                    <div class='mt-2 text-sm'>
                                        19 - 25
                                    </div>
                                </div>
                                <div class=''>
                                    <div class='flex items-center'>
                                        <div class='text-pink-2 mr-1 text-sm'>
                                            จังหวัดที่ต้องการค้นหา
                                        </div>
                                        <svg-icon
                                            name='eva_arrow-ios-downward-fill'
                                            width='20'
                                            height='20'
                                            class='text-pink-2'
                                        />
                                    </div>
                                    <div class='mt-2 text-sm text-[#CBCBCB]'>
                                        เลือกจังหวัดที่ต้องการ
                                    </div>
                                </div>
                                <div>
                                    <svg-icon
                                        name='foundation_magnifying-glass'
                                        width='50'
                                        height='50'
                                        class='bg-gradient-to-b from-[#D554A9] to-[#FAB4CE] rounded-full px-1 text-white'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class='bg-gradient-to-b from-[#D554A9] to-[#FAB4CE] h-[25rem] xl:h-[29rem]'>
            <div class='container mx-auto py-7 w-full'>
                <div class='flex justify-between px-5 xl:px-[6rem] text-white xl:mb-5'>
                    <div class='flex'>
                        <svg-icon
                            name='bi_bookmark-star-fill'
                            width='30'
                            height='30'
                            class='text-pink-2'
                        />
                        <span class='ml-3'>สังกัด</span>
                    </div>
                    <div>
                        ดูเพิ่มเติม
                    </div>
                </div>

                <swiper ref='swiper' :options='swiperOption' class='header'>
                    <swiper-slide>
                        <div class='xl:px-[6rem] px-10 py-5'>
                            <div class='grid grid-cols-3 lg:grid-cols-6 gap-2 xl:gap-[2.5rem]'>
                                <div v-for='(item,index) in guildThree()' :key='index'
                                     class='lg:hidden bg-white w-[90px] h-[90px] lg:w-[150px] lg:h-[150px] py-3 px-5 rounded-xl w-full hover:shadow-xl transform transition duration-150 ease-in-out hover:-translate-y-2'>
                                    <div class='flex justify-center'>
                                        <img :src='item.image' alt='' />
                                    </div>
                                    <span class='text-[#33333] text-xs lg:text-sm flex justify-center mt-1'>{{ item.name
                                        }}</span>
                                </div>
                                <div v-for='(item,index) in guildSix()' :key='index'
                                     class='hidden lg:block bg-white w-[90px] h-[90px] lg:w-[150px] lg:h-[150px] py-3 px-5 rounded-xl w-full hover:shadow-xl transform transition duration-150 ease-in-out hover:-translate-y-2'>
                                    <div class='flex justify-center'>
                                        <img :src='item.image' alt='' />
                                    </div>
                                    <span class='text-[#33333] text-xs lg:text-sm flex justify-center mt-1'>{{ item.name
                                        }}</span>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class='xl:px-[6rem] px-10 py-5'>
                            <div class='grid grid-cols-3 lg:grid-cols-6 gap-2 xl:gap-[2.5rem]'>
                                <div v-for='(item,index) in guildThree()' :key='index'
                                     class='bg-white w-[90px] h-[90px] lg:w-[150px] lg:h-[150px] py-3 px-5 rounded-xl w-full hover:shadow-xl transform transition duration-150 ease-in-out hover:-translate-y-2'>
                                    <div class='flex justify-center'>
                                        <img :src='item.image' alt='' />
                                    </div>
                                    <span class='text-[#33333] text-xs lg:text-sm flex justify-center mt-1'>{{ item.name
                                        }}</span>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <div class='swiper-button-prev prv' slot='button-prev' @click='prev()'></div>
                    <div class='swiper-button-next prv' slot='button-next' @click='next()'></div>
                </swiper>
            </div>
        </div>

        <div class='container mx-auto py-7 px-10 xl:px-[6rem] mb-5'>
            <div class='bg-pink-1 text-center py-6 w-full'>
                <div class='xl:px-[14rem] w-full'>
                    <div class='text-lg text-pink-2 mb-3 font-medium'>Fiwfan.com สำหรับผู้ที่มีอายุ 20
                        ปีขึ้นไปเท่านั้น
                    </div>
                    <div class='text-sm text-pink-2'>เราเป็น Social Media Platform
                        ที่ให้บริการเช่าพื้นที่สำหรับการโฆษณาเท่านั้น ไม่มีการซื้อบริการทางเพศ ไม่มีการเก็บค่าใช้จ่ายใด
                        ๆ ทั้งสิ้น หากมีการให้โอนเงินเพื่อซื้อบริการ กรุณาอย่าโอน หากมีการเก็บค่าจ้าง กรุณาติดต่อน้อง ๆ
                        โดยตรงจากบัญชีไลน์ที่ปรากฎในแต่ละหน้า Profile ของแต่ละบุคคล
                    </div>
                </div>
            </div>
            <div class='mt-5 w-full'>
                <div
                    class='w-full flex items-center justify-between bg-gradient-to-b from-pink-3 to-[#FAB4CE] py-3 rounded-md px-3 text-white'>
                    <div class='flex'>
                        <svg-icon
                            name='bx_bxs-star'
                            width='26'
                            height='26'
                        />
                        <span class='ml-2'>รายการทั้งหมด 535 รายการ</span>
                    </div>
                    <div class='relative w-full'>
                        <input
                            class='w-[15rem] text-sm rounded-md px-3 py-2 bg-dark-1 focus:outline-none font-light text-pink-2 placeholder-pink-2'
                            placeholder='ให้เราช่วยค้นหา...' />
                        <svg-icon
                            name='foundation_magnifying-glass'
                            height='25'
                            width='25'
                            class='absolute top-1 right-2 text-pink-2'
                        />
                    </div>
                </div>
            </div>
            <div class='mt-4 grid grid-cols-1 lg:grid-cols-4 gap-[1.25rem]'>
                <div v-for='(item,index) in userData' :key='index'>
                    <div
                        class='relative w-[16rem] h-[22.5rem] bg-white shadow-md rounded-md cursor-pointer hover:shadow-xl transform transition duration-150 ease-in-out hover:-translate-y-2'>
                        <img :src='item.image' alt=''>
                        <div class='absolute top-0 left-0 px-3'>
                            <div
                                class='flex items-center text-sm px-3 opacity-[0.8] py-1 bg-gradient-to-b from-[#D554A9] to-[#FAB4CE] mt-2 rounded-full'>
                                <svg-icon
                                    name='bx_bxs-star'
                                    width='16'
                                    height='16'
                                />
                                <span class='text-xs text-white ml-1'>TOP STAR</span>
                            </div>
                        </div>
                        <div class='absolute top-0 right-0 px-3'>
                            <div class='mt-2 bg-gray-1 p-[5px] rounded-full opacity-[0.8]'>
                                <svg-icon
                                    name='clarity_heart-solid'
                                    width='23'
                                    height='23'
                                />
                            </div>
                        </div>
                        <div class='absolute bottom-[8rem] right-0 px-3'>
                            <div v-show='item.status'
                                 class='px-4 py-1 text-xs text-white bg-gradient-to-b from-[#D554A9] to-[#FAB4CE] rounded opacity-[0.8]'>
                                ยืนยันตัวตนแล้ว
                            </div>
                        </div>
                        <div class='px-4 py-3'>
                            <div class='flex justify-between items-center mb-2'>
                                <div
                                    class='px-4 text-xs text-white bg-gradient-to-b from-[#D554A9] to-[#FAB4CE] rounded'>
                                    {{ item.province }}
                                </div>
                                <div class='text-xs text-pink-4'>
                                    {{ item.district }}
                                </div>
                            </div>
                            <div class='text-sm text-pink-4 font-medium mb-1'>
                                {{ item.name }}
                            </div>
                            <div class='text-sm text-gray-2'>
                                {{ item.sex }}
                            </div>
                            <div class='flex justify-between items-center'>
                                <div class='text-sm text-gray-2'>
                                    อายุ {{ item.age }}
                                </div>
                                <div class='text-2xl text-pink-4 font-semibold'>
                                    ฿ {{ addCommas(item.price) }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class='bg-gradient-to-b from-[#D554A9] to-[#FAB4CE] h-14'>

        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
    layout: 'default',
    components: {
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            swiperOption: {
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            },

            userData: [
                {
                    image: require('~/assets/image/img2.png'),
                    name: 'ผิงผิงCM',
                    sex: 'หญิง',
                    age: '25',
                    price: 1200,
                    province: 'เชียงใหม่',
                    district: 'หนองป่าครั่ง',
                    status: true
                },
                {
                    image: require('~/assets/image/img2.png'),
                    name: 'ผิงผิงCM',
                    sex: 'หญิง',
                    age: '25',
                    price: 1200,
                    province: 'เชียงใหม่',
                    district: 'หนองป่าครั่ง',
                    status: false
                },
                {
                    image: require('~/assets/image/img2.png'),
                    name: 'ผิงผิงCM',
                    sex: 'หญิง',
                    age: '25',
                    price: 1500,
                    province: 'เชียงใหม่',
                    district: 'หนองป่าครั่ง',
                    status: true
                },
                {
                    image: require('~/assets/image/img2.png'),
                    name: 'ผิงผิงCM',
                    sex: 'หญิง',
                    age: '25',
                    price: 1200,
                    province: 'เชียงใหม่',
                    district: 'หนองป่าครั่ง',
                    status: true
                },
                {
                    image: require('~/assets/image/img2.png'),
                    name: 'ผิงผิงCM',
                    sex: 'หญิง',
                    age: '25',
                    price: 1200,
                    province: 'เชียงใหม่',
                    district: 'หนองป่าครั่ง',
                    status: true
                },
                {
                    image: require('~/assets/image/img2.png'),
                    name: 'ผิงผิงCM',
                    sex: 'หญิง',
                    age: '25',
                    price: 1500,
                    province: 'เชียงใหม่',
                    district: 'หนองป่าครั่ง',
                    status: false
                },
                {
                    image: require('~/assets/image/img2.png'),
                    name: 'ผิงผิงCM',
                    sex: 'หญิง',
                    age: '25',
                    price: 1200,
                    province: 'เชียงใหม่',
                    district: 'หนองป่าครั่ง',
                    status: true
                },
                {
                    image: require('~/assets/image/img2.png'),
                    name: 'ผิงผิงCM',
                    sex: 'หญิง',
                    age: '25',
                    price: 1200,
                    province: 'เชียงใหม่',
                    district: 'หนองป่าครั่ง',
                    status: false
                },
                {
                    image: require('~/assets/image/img2.png'),
                    name: 'ผิงผิงCM',
                    sex: 'หญิง',
                    age: '25',
                    price: 1500,
                    province: 'เชียงใหม่',
                    district: 'หนองป่าครั่ง',
                    status: true
                },
                {
                    image: require('~/assets/image/img2.png'),
                    name: 'ผิงผิงCM',
                    sex: 'หญิง',
                    age: '25',
                    price: 1200,
                    province: 'เชียงใหม่',
                    district: 'หนองป่าครั่ง',
                    status: true
                },
                {
                    image: require('~/assets/image/img2.png'),
                    name: 'ผิงผิงCM',
                    sex: 'หญิง',
                    age: '25',
                    price: 2000,
                    province: 'เชียงใหม่',
                    district: 'หนองป่าครั่ง',
                    status: true
                },
                {
                    image: require('~/assets/image/img2.png'),
                    name: 'ผิงผิงCM',
                    sex: 'หญิง',
                    age: '25',
                    price: 1200,
                    province: 'เชียงใหม่',
                    district: 'หนองป่าครั่ง',
                    status: true
                },
                {
                    image: require('~/assets/image/img2.png'),
                    name: 'ผิงผิงCM',
                    sex: 'หญิง',
                    age: '25',
                    price: 1200,
                    province: 'เชียงใหม่',
                    district: 'หนองป่าครั่ง',
                    status: true
                },
                {
                    image: require('~/assets/image/img2.png'),
                    name: 'ผิงผิงCM',
                    sex: 'หญิง',
                    age: '25',
                    price: 1200,
                    province: 'เชียงใหม่',
                    district: 'หนองป่าครั่ง',
                    status: true
                },
                {
                    image: require('~/assets/image/img2.png'),
                    name: 'ผิงผิงCM',
                    sex: 'หญิง',
                    age: '25',
                    price: 1200,
                    province: 'เชียงใหม่',
                    district: 'หนองป่าครั่ง',
                    status: true
                },
                {
                    image: require('~/assets/image/img2.png'),
                    name: 'ผิงผิงCM',
                    sex: 'หญิง',
                    age: '25',
                    price: 1200,
                    province: 'เชียงใหม่',
                    district: 'หนองป่าครั่ง',
                    status: true
                }
            ],

            affiliation: [
                {
                    image: require('~/assets/image/img1.png'),
                    name: 'PG mini'
                },
                {
                    image: require('~/assets/image/img1.png'),
                    name: 'PG mini'
                },
                {
                    image: require('~/assets/image/img1.png'),
                    name: 'PG mini'
                },
                {
                    image: require('~/assets/image/img1.png'),
                    name: 'PG mini'
                },
                {
                    image: require('~/assets/image/img1.png'),
                    name: 'PG mini'
                },
                {
                    image: require('~/assets/image/img1.png'),
                    name: 'PG mini'
                },
                {
                    image: require('~/assets/image/img1.png'),
                    name: 'PG mini'
                },
                {
                    image: require('~/assets/image/img1.png'),
                    name: 'PG mini'
                },
                {
                    image: require('~/assets/image/img1.png'),
                    name: 'PG mini'
                },
                {
                    image: require('~/assets/image/img1.png'),
                    name: 'PG mini'
                },
                {
                    image: require('~/assets/image/img1.png'),
                    name: 'PG mini'
                },
                {
                    image: require('~/assets/image/img1.png'),
                    name: 'PG mini'
                }
            ]
        }
    },

    computed: {},

    methods: {
        prev() {
            this.$refs.swiper.$swiper.slidePrev()
        },
        next() {
            this.$refs.swiper.$swiper.slideNext()
        },
        guildThree() {
            const data = []
            for (let i = 0; i < 9; i++) {
                data.push(this.affiliation[i])
            }
            return data
        },
        guildSix() {
            const data = []
            for (let i = 0; i < 12; i++) {
                data.push(this.affiliation[i])
            }
            return data
        }
    }
}
</script>

<style lang='scss' scoped>
.prv {
    color: white;
}

.header {
    padding: 0rem 0px;
}
</style>

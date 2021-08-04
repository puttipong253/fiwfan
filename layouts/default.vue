<template>
    <div>
        <div class='bg-pink-1'>
            <nav class='container mx-auto px-16 py-5 flex justify-between'>
                <div class='font-bold text-2xl text-pink-2 cursor-pointer'>
                    LOGO
                </div>

                <div class='flex items-center'>
                    <div class='font-medium text-base text-pink-2 mx-6 cursor-pointer'>
                        กิจกรรม
                    </div>
                    <div class='font-medium text-base text-pink-2 mx-6 cursor-pointer'>
                        กระดานผู้นำท่องเที่ยว
                    </div>
                    <div class='font-medium text-base text-pink-2 mx-6 cursor-pointer'>
                        การบ้านคุณภาพ
                    </div>
                    <div class='font-medium text-base text-pink-2 mx-6 cursor-pointer'>
                        พูดคุยการบ้าน/ติดต่อแอดมิน
                    </div>
                </div>

                <div>
                    <button class='font-medium text-base text-black rounded-full px-4 py-1 mr-5'>
                        Sign In
                    </button>

                    <button class='font-normal text-base bg-pink-2 text-white rounded-full px-4 py-1'>
                        Sign Up
                    </button>
                </div>
            </nav>
        </div>
        <Nuxt />
    </div>
</template>

<script>
export default {}
</script>

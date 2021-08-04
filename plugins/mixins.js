import Vue from 'vue'

Vue.mixin({
    methods: {
        addCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        },

        convertDateTH(dateStr, format = 'W d M y') {
            let date = new Date(dateStr)
            let option = {
                w: date.toLocaleDateString('th-TH', { weekday: 'short' }).replace('.', ''),
                W: date.toLocaleDateString('th-TH', { weekday: 'long' }),
                m: date.toLocaleDateString('th-TH', { month: 'short' }),
                M: date.toLocaleDateString('th-TH', { month: 'long' }),
                y: date.toLocaleDateString('th-TH', { year: 'numeric' }).replace('พ.ศ. ', ''),
                Y: date.toLocaleDateString('th-TH', { year: 'numeric' }),
                d: date.toLocaleDateString('th-TH', { day: 'numeric' })
            }
            let newDateStr = format

            for (let key in option) {
                if (format.includes(key)) {
                    newDateStr = newDateStr.replace(key, option[key])
                }
            }

            return newDateStr
        },

        convertDateNormal(dateStr, format = 'Y-m-d') {
            let date = new Date(dateStr)
            let option = {
                Y: date.toLocaleDateString('en-GB', { year: 'numeric' }),
                M: date.toLocaleDateString('en-GB', { month: 'short' }),
                m: this.padNum(date.toLocaleDateString('en-GB', { month: 'numeric' }), 2),
                d: this.padNum(date.toLocaleDateString('en-GB', { day: 'numeric' }), 2),
                H: date.toLocaleTimeString('en-GB', { hour: '2-digit' }),
                MM: date.toLocaleTimeString('en-GB', { minute: '2-digit' }),
                SS: date.toLocaleTimeString('en-GB', { second: '2-digit' })
            }
            let newDateStr = format

            for (let key in option) {
                if (format.includes(key)) {
                    newDateStr = newDateStr.replace(key, option[key])
                }
            }

            return newDateStr
        },
    }
})

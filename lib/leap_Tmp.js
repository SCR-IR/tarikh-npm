{
    // کبیسه‌بندی جلالی
    function isLeap1(year) {
        return ((((year + 12) % 33) % 4) === 1);
    }


    // کبیسه‌بندی اعتدالی
    function isLeap2(jy) {
        var breaks = [-61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210
            , 1635, 2060, 2097, 2192, 2262, 2324, 2394, 2456, 3178];
        var bl = breaks.length
            , jp = breaks[0]
            , jm
            , jump
            , leap
            , n
            , i

        if (jy < jp || jy >= breaks[bl - 1])
            throw new Error('Invalid Jalaali year ' + jy)

        for (i = 1; i < bl; i += 1) {
            jm = breaks[i]
            jump = jm - jp
            if (jy < jm)
                break
            jp = jm
        }
        n = jy - jp

        if (jump - n < 6)
            n = n - jump + div(jump + 4, 33) * 33
        leap = mod(mod(n + 1, 33) - 1, 4)
        if (leap === -1) {
            leap = 4
        }

        return (leap === 0);
    }
}
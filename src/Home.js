import { useEffect, useState } from "react"

function Home() {

    let [val1, setval1] = useState('')
    let [val2, setval2] = useState('')
    let [val3, setval3] = useState('')
    let [val4, setval4] = useState('')
    let [val5, setval5] = useState('')
    let [val6, setval6] = useState('')
    let [val7, setval7] = useState('')
    let [val8, setval8] = useState('')
    let [val9, setval9] = useState('')
    let [ans, setans] = useState('')

    useEffect(() => {
        
        reset()

    }, [])

    let reset = () => {

        let a, arr = [], id, win;
        for (let i = 0; i < 9; i++) {
            a = Math.floor(Math.random() * 9 + 1);
            if (!arr.includes(a)) {
                arr.push(a);
            }
            else {
                i--;
            }
        }

        if (arr.includes(9)) {
            id = arr.indexOf(9)
            arr[id] = ' ';
        }

        setval1(arr[0])
        setval2(arr[1])
        setval3(arr[2])
        setval4(arr[3])
        setval5(arr[4])
        setval6(arr[5])
        setval7(arr[6])
        setval8(arr[7])
        setval9(arr[8])

        console.log(arr);

    }

    let handler1 = () => {
        if (val2 == ' ') {
            setval2(val1);
            setval1(' ')
        }
        else if (val4 == ' ') {
            setval4(val1);
            setval1(' ')
        }
        chek();
    }
    let handler2 = () => {
        if (val1 == ' ') {
            setval1(val2)
            setval2(' ')
        }
        else if (val5 == ' ') {
            setval5(val2)
            setval2(' ')
        }
        else if (val3 == ' ') {
            setval3(val2)
            setval2(' ')
        }
        chek();
    }
    let handler3 = () => {
        if (val2 == ' ') {
            setval2(val3)
            setval3(' ')
        }
        else if (val6 == ' ') {
            setval6(val3)
            setval3(' ')
        }
        chek();
    }
    let handler4 = () => {
        if (val1 == ' ') {
            setval1(val4)
            setval4(' ')
        }
        else if (val5 == ' ') {
            setval5(val4)
            setval4(' ')
        }
        else if (val7 == ' ') {
            setval7(val4)
            setval4(' ')
        }
        chek();
    }
    let handler5 = () => {
        if (val2 == ' ') {
            setval2(val5)
            setval5(' ')
        }
        else if (val4 == ' ') {
            setval4(val5)
            setval5(' ')
        }
        else if (val6 == ' ') {
            setval6(val5)
            setval5(' ')
        }
        else if (val8 == ' ') {
            setval8(val5)
            setval5(' ')
        }
        chek();
    }
    let handler6 = () => {
        if (val3 == ' ') {
            setval3(val6)
            setval6(' ')
        }
        else if (val5 == ' ') {
            setval5(val6)
            setval6(' ')
        }
        else if (val9 == ' ') {
            setval9(val6)
            setval6(' ')
        }
        chek();
    }
    let handler7 = () => {
        if (val4 == ' ') {
            setval4(val7)
            setval7(' ')
        }
        else if (val8 == ' ') {
            setval8(val7)
            setval7(' ')
        }
        chek();
    }
    let handler8 = () => {
        if (val7 == ' ') {
            setval7(val8)
            setval8(' ')
        }
        else if (val5 == ' ') {
            setval5(val8)
            setval8(' ')
        }
        else if (val9 == ' ') {
            setval9(val8)
            setval8(' ')
        }
        chek();
    }
    let handler9 = () => {
        if (val6 == ' ') {
            setval6(val9)
            setval9(' ')
        }
        else if (val8 == ' ') {
            setval8(val9)
            setval9(' ')
        }
        chek();
    }
    const chek = () => {

        let win;

        if (val1 == 1 && val2 == 2 && val3 == 3 && val4 == 4 && val5 == 5 && val6 == 6 && val7 == 7 && val8 == 8 && val9 == ' ') {
            win = "You Win..";
        }
        setans(win)

    }



    return (
        <>
            <div>
                <h1>Number Puzzle</h1>
                <div>
                    <div className="head">
                        <input type="button" value={val1} onClick={() => { handler1() }} />
                        <input type="button" value={val2} onClick={() => { handler2() }} />
                        <input type="button" value={val3} onClick={() => { handler3() }} />
                    </div>
                    <div className="head">
                        <input type="button" value={val4} onClick={() => { handler4() }} />
                        <input type="button" value={val5} onClick={() => { handler5() }} />
                        <input type="button" value={val6} onClick={() => { handler6() }} />
                    </div>
                    <div className="head">
                        <input type="button" value={val7} onClick={() => { handler7() }} />
                        <input type="button" value={val8} onClick={() => { handler8() }} />
                        <input type="button" value={val9} onClick={() => { handler9() }} />
                    </div>
                </div>
                <div>
                    <h1>{ans}</h1>
                </div>
                <div className="mt-5">
                    <button onClick={() => { reset() }}>Reset</button>
                </div>
            </div>
        </>
    )
}

export default Home
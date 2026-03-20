function toUpperCaseFun() {
            let str = document.getElementById("string1").value
            document.getElementById("resultbox1").innerText = str.toUpperCase()
        }

        function toLowerCaseFun() {
            let str = document.getElementById("string1").value
            document.getElementById("resultbox1").innerText = str.toLowerCase()
        }

        function trimFun() {
            let str = document.getElementById("string1").value
            document.getElementById("resultbox1").innerText = `[${str.trim()}] (Brackets show space removal)`
        }

        function replace_split() {
            let str = document.getElementById("string2").value
            let slug = str.toLowerCase().replace(" ", '-')
            let part = str.split(" ")
            document.getElementById("resultbox2").innerText = `Slug ${slug}\n Parts: ${JSON.stringify(part)}`
        }

        let tasks = ["Email", "Code"]
        function pushItem() {
            let update = tasks.push("Task_" + (tasks.length + 1))
            document.getElementById("question").innerText = `${JSON.stringify(tasks)}`
        }
        function popItem() {
            let update = tasks.pop()
            document.getElementById("question").innerText = `${JSON.stringify(tasks)}`
        }
        function unshiftItem() {
            let update = tasks.unshift("Urgent")
            document.getElementById("question").innerText = `${JSON.stringify(tasks)}`
        }
        function shiftItem() {
            let update = tasks.shift()
            document.getElementById("question").innerText = `${JSON.stringify(tasks)}`
        }

        let prices = [5, 20, 45, 100, 12]
        function filter_map() {
            let filtered_price = prices.filter(p => p >= 15).map(p => `$${p}`)
            document.getElementById("resultbox3").innerText = `Filtered/mapped: ${filtered_price.join(" | ")}`
        }

        function round_up(){
            let round_no=parseInt(document.getElementById("rounding_no").value)
            let selected=document.getElementById("selection").value
            if(selected==='round'){
                document.getElementById("resultbox4").innerText=`Result of Math.round(${round_no}): ${Math.round(round_no)}`
            }
            else if(selected==='ceil'){
                document.getElementById("resultbox4").innerText=`Result of Math.ceil(${round_no}): ${Math.ceil(round_no)}`
            }
            else if(selected==='floor'){
                document.getElementById("resultbox4").innerText=`Result of Math.floor(${round_no}): ${Math.floor(round_no)}`
            }
            else{
                document.getElementById("resultbox4").innerText=`Invalid Input`
            }
        }

        function inp_validate(){
            let inp=document.getElementById("number_or_string").value
            let parse=parseInt(inp)
            let check_num=isNaN(parse)
            document.getElementById("resultbox5").innerText=`Parsed: ${parse}\n Is It NaN? ${check_num}`
        }

        function calculateAge(){
            let birth_year=parseInt(document.getElementById("inp_yr").value)
            let current_year=new Date().getFullYear()

            document.getElementById("resultbox6").innerText=`You are roughly ${current_year-birth_year} years old.`
        }

        function json_stringify(){
            let obj={
                user: "Admin",
                status: "Active",
                id: 101
            }
            let json=JSON.stringify(obj,null,2)
            document.getElementById("resultbox7").innerText=json
        }
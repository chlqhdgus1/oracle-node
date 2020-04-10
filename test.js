const oracledb = require("oracledb"); //const는변수를 선언합니다
const pwd = "madang";
const username = "c##madag";
url = "localhost:1521/XE";
sql = "select * from dept";



async function run() {
  try {
    let conn = await oracledb.getConnection({ //let도 변수를 선언합니다라는 뜻
      user: username,
      password: pwd,
      connectString: url
    });
    console.log("연결객체" + conn)
    cont result = conn.execute(sql);
    consol.log(result);
  } catch {
    consol.log(err);
  } finally {
    if(conn){
      try{
      await conn.close;
      }catch(err){
        consol.log(err)
      }
    }
  }
}
run();

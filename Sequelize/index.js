import  Sequelize, { INTEGER, where }  from "sequelize";
import { toDefaultValue } from "sequelize/lib/utils";

const {DataTypes, Op} = Sequelize

const sequelize = new Sequelize({
    dialect:"sqlite",
    storage:"./data/database.sqlite"
})

sequelize.authenticate().then(() => {
    console.log('Connection successful')
  }).catch((err) => {
    console.log('Error connectiog to database')
  })

  const Student = sequelize.define('student',{
    student_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name:{
        type: DataTypes.STRING,
        min: 4,
        max: 20,
        allowNull: false,
    },
    favorite_class: {
        type: DataTypes.STRING,
        defaultValue: "Computer Science",
    },
    school_year:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    has_language_examination:{
        type: DataTypes.TINYINT,
        defaultValue: true
    },
  }

  );

Student.sync({alter:true})
        .then(() =>{
            return Student.bulkCreate([
                {student_id:1,name:"Tom",favorite_class: "Sleeping",school_year:21,has_language_examination:false},
                {student_id:2,name:"Bombadil",favorite_class: "Math",school_year:26,has_language_examination:true},
                {student_id:3,name:"Geralt",favorite_class: "Smithing",school_year:100,has_language_examination:true},
                {student_id:4,name:"Of",favorite_class: "Computer Science",school_year:80,has_language_examination:true},
                {student_id:5,name:"Rivia",favorite_class: "Yes",school_year:735,has_language_examination:false}
            ]) 
        });
Student.sync({alter:true})
        .then(() =>{
            return Student.findAll({
                where:{
                    [Op.or]:{favorite_class :"Computer Sience", has_language_examination:true }
                }
            })
        })
        .then((data)=>{
            data.forEach((element) => {
                console.log(element.toJSON());
            })
        })
        .catch((err) => {
            console.log(`Error: ${err.message}`);
        });
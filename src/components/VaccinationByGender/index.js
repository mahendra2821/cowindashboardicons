import {PieChart, Pie, Legend, Cell} from 'recharts'
import './index.css'

const VaccinationByGender = props => {
  const {vaccinationByGenderDetails} = props

  return (
    <div className="Vaccination-by-gender-container">
      <h1 className="Vaccination-by-gender-heading">Vaccination by gender</h1>
      <PieChart width={1000} height={300}>
        <Pie
          cx="50%"
          cy="40%"
          data={vaccinationByGenderDetails}
          startAngle={360}
          endAngle={0}
          innerRadius="30%"
          outerRadius="60%"
          dataKey="count"
        >
          <Cell name="Male" fill="#f54394" />
          <Cell name="Female" fill="#5a8dee" />
          <Cell name="Others" fill="#2cc6c6" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
          wrapperStyle={{fontSize: 12, fontFamily: 'roboto'}}
        />
      </PieChart>
    </div>
  )
}
export default VaccinationByGender

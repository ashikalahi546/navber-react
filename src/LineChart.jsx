
import { LineChart as LChart, Line, Tooltip, XAxis, YAxis } from 'recharts';

const LineChart = () => {
   
        const mathMarkData = [
            {'id': 1, 'name': 'Alice', 'math_marks': 85, 'physics_marks': 75, 'chemistry_marks': 90},
            {'id': 2, 'name': 'Bob', 'math_marks': 70, 'physics_marks': 80, 'chemistry_marks': 85},
            {'id': 3, 'name': 'Charlie', 'math_marks': 92, 'physics_marks': 85, 'chemistry_marks': 88},
            {'id': 4, 'name': 'David', 'math_marks': 78, 'physics_marks': 72, 'chemistry_marks': 80},
            {'id': 5, 'name': 'Emma', 'math_marks': 88, 'physics_marks': 90, 'chemistry_marks': 92},
            {'id': 6, 'name': 'Frank', 'math_marks': 65, 'physics_marks': 68, 'chemistry_marks': 70},
            {'id': 7, 'name': 'Grace', 'math_marks': 95, 'physics_marks': 88, 'chemistry_marks': 92},
            {'id': 8, 'name': 'Henry', 'math_marks': 82, 'physics_marks': 78, 'chemistry_marks': 85},
            {'id': 9, 'name': 'Ivy', 'math_marks': 75, 'physics_marks': 70, 'chemistry_marks': 78},
            {'id': 10, 'name': 'Jack', 'math_marks': 90, 'physics_marks': 85, 'chemistry_marks': 88}
        ]
    return (
        <div>
            <LChart width={500} height={400} data={mathMarkData}>
                <Line  dataKey="math_marks" stroke="red"></Line>
                <Line dataKey='physics_marks' stroke='blue'></Line>
               <Tooltip></Tooltip>
                <XAxis data={name}></XAxis>
                <YAxis></YAxis>
            </LChart>
        </div>
    );
};

export default LineChart;
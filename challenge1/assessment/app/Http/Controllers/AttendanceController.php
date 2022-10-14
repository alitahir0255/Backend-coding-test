<?php

namespace App\Http\Controllers;
use SplFileObject;
use App\Models\Attendance;
use Illuminate\Http\Request;

class AttendanceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $path= base_path(). '/public/csv/attendance.csv' ;
        if (file_exists($path)){
            $file= new \SplFileObject($path);   
            $file-> setFlags(\SplFileObject::READ_CSV);  
            $i=0;  
foreach($file as $key => $value){
    if ($i > 0){
        if (!empty($value[0])){
        list($id,$name,$checkin,$checkout,$totalhours) = $value;
    
    Attendance::create(['total_hours'=>$totalhours,'checkin'=>$checkin,'checkout'=>$checkout,'emp_id'=>(int)$id]);
}}$i++;
        }
    }
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Attendance  $attendance
     * @return \Illuminate\Http\Response
     */
    public function show(Attendance $attendance,$id)
    {
        $records = Attendance::join('employees', 'attendances.emp_id', '=', 'employees.id')->select('attendances.*', 'employees.name')->where('emp_id', $id)->get(); 
        // var_dump($records);
        // exit;
        // dd($records->count());
        if ($records->count()=== 0){
        return response()->json([
            'status' => false,
            'message' => "No Record Found against this id",
            'status_code' => 404,
        
        ]);}
        else{
            return response()->json([
                'status' => true,
                'message' => "Record Found",
            'data' => $records,
            'status_code' => 200,
            ]);} 
        }
    

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Attendance  $attendance
     * @return \Illuminate\Http\Response
     */
    public function edit(Attendance $attendance)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Attendance  $attendance
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Attendance $attendance)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Attendance  $attendance
     * @return \Illuminate\Http\Response
     */
    public function destroy(Attendance $attendance)
    {
        //
    }
}


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>

      * {
            margin: 0;
            padding: 0;

        }

        .address {
            margin-top: 50px;
            margin-bottom: 20px;
            line-height: 25px;
            text-align: center;

        }

        .logo {
            font-size: 32px;
            font-weight: bolder;

        }

        .container{
                      position:absolute;
                      width: 100%;
                      height:auto ;

                  }
         .table_container{

             text-align: center;
             margin:5px;
         }



           th, td {
            border-bottom: 1px solid #ddd;
            padding: 3px;
            }

           th {
            height: 40px;
            width: 105px;
           }

 td {
             text-align: center;
            }
    </style>

     <?php
      $setting=App\Models\GeneralSetting::latest()->first();
   ?>
</head>
<body>
     <div class="container">

        <div class="address">
          <p class="logo"> {{ $setting->title }} </p>
          <p> {!! $setting->invoice_address_details !!} </p>


        </div>

          <div class="table_container">
                  <table class="table table-striped">

                        <tr>
                            <th scope="col">Serial No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Address</th>
                            <th scope="col">Taken Amount </th>
                            <th scope="col">Paid Amount</th>
                            <th scope="col">Due Amount</th>
                        </tr>

                        <tbody>

                        <?php $n=1 ;?>
                        @foreach ($loans as $key=> $loan)
                        <tr >
                            <td> {{ $key + 1 }}  </td>
                            <td> {{ $loan->name }}  </td>
                            <td> {{ $loan->mobile_no  }}   </td>
                            <td> {{ $loan->address  }}   </td>
                            <td> {{ $loan->taken_amount }}   </td>
                            <td> {{ $loan->paid_amount }}  </td>
                            <td> {{ $loan->taken_amount - $loan->paid_amount }}   </td>
                         </tr>
                         @if($n % 25 == 0)
                         <div style="page-break-before:always;"></div>
                        @endif
                        <?php $n++ ?>
                        @endforeach

                        <tr>
                            <td colspan="4"></td>
                            <td >
                               <strong> =  {{ $total_loan }}</strong>
                            </td>
                            <td >
                                <strong> = {{  $total_loan_paid }}</strong>
                            </td>
                            <td >
                                <strong> = {{ $due_amount }}</strong>
                            </td>

                        </tr>

                    </tbody>
                </table>

          </div>
     </div>

   </body>
</html>

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Sell Center of  Bondhon Society Limited</title>


       @include('sellcenter.partials.css')


       <style>
        .is-invalid {
            border: 1px solid red;
        }

        .invalid-feedback {
            color: red;
        }
        .swal2-popup{
            width: 24em!important;
            font-size: 1.2em !important;
        }
        .swal2-styled.swal2-confirm {

            font-size: 1.0625em;
        }
        .small-image{
            width: 50px;
            border: 1px solid #000;
        }
        .skin-blue .sidebar-menu .treeview-menu>li>router-link {
            color: #8aa4af;
        }
        .router-link-active{
            color: #fff !important;
        }
        .text-danger{
            color: red !important;
        }
        span.badge-danger {
            background: red;
        }
        span.badge-success {
            background: green;
        }
        span.badge-warning {
            background: #f39c12;
            color: #000 !important;
        }
        span.badge-primary {
            background: #3c8dbc;
        }
        .table td {
            border: 1px solid #ddd;

        }
        .table th {
            background-color: #ddd;

        }
        .login{
            display: none; !important;
        }
        .table-image{
            width: 100px;height: 95px
        }
        .barcode{
            margin-bottom: 0px;
        }
        .barcode-number{
            margin-left: 40px;
        }
        .two-percent{
            width: 2% !important;
        }
        .three-percent{
            width: 3% !important;
        }
        .action-btn {
        width: 70px !important;
        margin-bottom: 2px !important;
    }
    li.dropdown a {
        color: #fff !important;
    }
    li.dropdown a:hover {
        color: #000 !important;
    }
    .invoice-header{
        text-align: center;
        display: none;
    }
    .invoice-header .address {
        margin-top: 6px;
    }
    .invoice-header .address p {
        margin: 0 0px;
        font-weight: bolder;

    }
    .invoice-body{
        margin-bottom: 30px;
    }
    .invoice-body p{
        margin: 0 0px;
    }
    .toasted.toasted-primary.success {
        width: 400px;
        height: 55px;
        font-size: 18px;
    }


    .toasted.toasted-primary.error {
        width: 400px;
        height: 55px;
        font-size: 18px;
        font-weight: bolder;
    }
    .ck.ck-content.ck-editor__editable.ck-rounded-corners.ck-editor__editable_inline.ck-blurred{
        height: 200px !important;
    }
    .permisson-denied {
            text-align: center;

    }

    .permisson-denied img {
        border: 5px solid red;
        border-radius: 9px;
    }


    

    .order_statistic{
        margin-left: 10px;
    }

    .statistic_item{
        float: left;
        background: rgb(64, 70, 151);
        box-shadow: 0 1pt 6pt rgb(150 165 237);
        border: none;
        padding: 1px 40px;
        margin: 5px;
        width: 23.4%;
        height: 100px;
    }

    .statistic_item h3 {
        padding-top: 10px;
        cursor: pointer;
        font-size: 28px;
        font-weight: bold;
        font-family: serif;
        line-height: 23px;
        color: #fff;
    }

    .statistic_item h2 {
        font-size: 34px;
        font-weight: bold;
        font-family: serif;
        line-height: 23px;
        color: #fff;
    }

    .statistic_item p {
        font-size: 16px;
        font-family: serif;
        position: absolute;
        line-height: 13px;
        color: #fff;
    }

    
    .router-link-exact-active {
        border: 1.5px dashed  ;
        background-color:#232452 ;
        color: #000;
     }





    @media (max-width: 991px){ 
    
    .content-header>.breadcrumb {
        position: relative;
        margin-top: 5px;
        top: 0;
        right: 0;
        float: none;
        background: #fff !important;
        padding-left: 10px;
    }

}


    @media only screen and (max-width:768px){

        .col-lg-12,.col-md-12,.col-lg-11,.col-lg-10,.col-lg-8,.col-md-11,.col-md-10 {
            overflow-x: auto ;
        }
        
        .order_statistic a {
            width: 45%;
            height: 100px;
            padding: 5px 25px;
           }
    }




    </style>

</head>
<body  class="hold-transition skin-blue sidebar-mini">
<div id="app" class="wrapper">

  @if(session()->has('sellcenter'))
     @include('sellcenter.partials.navbar')
  @endif
  <!-- Left side column. contains the logo and sidebar -->

  @if(session()->has('sellcenter'))
     @include('sellcenter.partials.sidebar')
  @endif

  <!-- Content Wrapper. Contains page content -->

        <router-view>  </router-view>
        <vue-progress-bar> <vue-progress-bar>



</div>
@if(session()->has('sellcenter'))
@include('sellcenter.partials.footer')
@endif
<!-- ./wrapper -->

 @include('sellcenter.partials.js')

<script src="{{ asset('js/app.js') }}" ></script>

</body>
</html>

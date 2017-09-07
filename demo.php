<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>datepick.js Demo</title>
    <link rel="stylesheet" href="css/datepick.css" />
</head>
<body>
   
    <div class="dp-calendar">
        <div class="dp-month-year-row">
            <span class="left"><</span>
            <span>
                <select id="month-selector">
                    <option value="jan" selected>January</option>
                    <option value="feg">February</option>
                    <option value="mar">March</option>
                    <option value="apr">April</option>
                    <option value="june">June</option>
                    <option value="july">July</option>
                    <option value="aug">August</option>
                </select>
                <select id="year-selector">
                    <option value="2014">2014</option>
                    <option value="2015">2015</option>
                    <option value="2016" selected>2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                </select>
            </span>
            <span class="right">></span>
        </div>
        <div>
           <table>
               <tbody>
                   <tr class="dp-days-row">
                       <th>Mon</th>
                       <th>Tue</th>
                       <th>Wed</th>
                       <th>Thu</th>
                       <th>Fri</th>
                       <th>Sat</th>
                       <th>Sun</th>
                   </tr>
                       <?php

                        for($i = 1; $i <= 31; $i++) {
                            
                            if($i % 7 == 1) {
                                echo '<tr class="dp-date-row">';
                            }
                            
                            echo '<td>' . $i . '</td>';
                            
                            if($i % 7 == 0) {
                                echo '</tr>';
                            }
                        }

                        ?>
                   </tr>
               </tbody>
           </table>
        </div>
    </div>
   
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha256-k2WSCIexGzOj3Euiig+TlR8gA0EmPjuc79OEeY5L45g=" crossorigin="anonymous"></script>
</body>
</html>
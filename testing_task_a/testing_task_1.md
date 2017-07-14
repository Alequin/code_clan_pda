### Testing task 1 code:

  Carry out static testing on the code below.  
  Read through the code.  Comment any errors you can see without correcting them.


def func1 val
  <!-- if val = 1 (single '=' should be double)-->
    return true
  else
    return false
  end
end

<!-- dif max a b (dif mis-spelled, missing comma between a and b)-->
  if a > b
      <!-- return a (indentation)-->
  else
  <!-- b (indentation)-->
  end
<!-- end  (extra end not needed)-->
end

def looper
  for i in 1..10
  <!-- puts i (indentation)-->
  end
end

failures = 0

if looper == 10
  puts "looper passed"
else
  puts "looper failed"
  failures = failures + 1
<!-- no end keyword -->

if func1(3) == false
  puts "func1(3) passed"
else
  puts "func1(3) failed"
  failures = failures + 1
end


if max(100,1) == 100
  puts "max(100,1) passed"
else
  puts "func1(3) failed"
  <!-- failrues = failures + 1 -->
end


<!-- if failures (always true as 0 is a truthy value)-->
  puts "Test Failed"
else
  puts "Test Passed"
end

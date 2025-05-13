export const CourseContentData = 
    {
        
        Topic : [
            {
                id:1,
                name:'Basic Course 1',
                description:"description daal dena",
                image:'https://img.freepik.com/premium-photo/great-picture-image-will-make-your-work-more-beautiful_987032-102143.jpg',
                Topic:"Introduction",
                TopicData:[
                   {                      
        name: 'What is Python',
        description: 'Python is a high-level, interpreted programming language with dynamic semantics. It is known for its easy-to-read syntax and supports multiple programming paradigms including procedural, object-oriented, and functional programming.',
        input: `# Simple Python code to add two numbers\na = 12\nb = 13\nprint("Sum is:", a + b)`,
        output: `Sum is: 25`,
    },
    {                      
        name: 'What can Python do',
        description: 'Python is extremely versatile — it can be used for web development, data analysis, artificial intelligence, automation, game development, and more. Its vast ecosystem of libraries makes it powerful and efficient for all types of tasks.',
        input: `# Example of web scraping with Python\nimport requests\nfrom bs4 import BeautifulSoup\n\nurl = "https://example.com"\nresponse = requests.get(url)\nsoup = BeautifulSoup(response.text, "html.parser")\nprint(soup.title.string)`,
        output: `Example Domain`,
    },
    {                      
        name: 'Variables in Python',
        description: 'Variables in Python are created automatically when you assign a value to them. There’s no need to declare their type, and the data type is inferred dynamically based on the assigned value.',
        input: `# Assigning variables\nname = "Alice"\nage = 25\nheight = 5.4\nis_student = True\n\nprint(name, age, height, is_student)`,
        output: `Alice 25 5.4 True`,
    },
    {                      
        name: 'Loops in Python',
        description: 'Python provides two types of loops: "for" loops to iterate over sequences like lists or strings, and "while" loops that repeat as long as a condition is true. They are essential for automating repetitive tasks.',
        input: `# Loop through a list\nnumbers = [1, 2, 3, 4, 5]\nfor num in numbers:\n    print(num * 2)`,
        output: `2\n4\n6\n8\n10`,
    },
    {                      
        name: 'Functions in Python',
        description: 'Functions in Python are defined using the "def" keyword. They allow code reuse, modularity, and better organization. Functions can take parameters and return values.',
        input: `# Define and use a function\ndef greet(name):\n    return "Hello, " + name + "!"\n\nmessage = greet("Bob")\nprint(message)`,
        output: `Hello, Bob!`,
    },

                ]
            },
            {
                id:2,
                name:"Basic Course 2",
                description:"description daal dena",
                image:'https://img.freepik.com/premium-photo/great-picture-image-will-make-your-work-more-beautiful_987032-102143.jpg',
                Topic:"Variables",
                TopicData:[
                    {
        name: 'Declaring Variables',
        description: 'In Python, variables are created when you assign a value to them. You don’t need to declare their type explicitly. The type is inferred based on the assigned value.',
        input: `# Declare different types of variables\nname = "John"\nage = 30\nheight = 5.9\nis_active = True\n\nprint(name, age, height, is_active)`,
        output: `John 30 5.9 True`,
    },
    {
        name: 'Variable Naming Rules',
        description: 'Python variable names must start with a letter or underscore and can only contain alphanumeric characters and underscores. They are case-sensitive and should not be keywords.',
        input: `# Valid and invalid variable names\n_name = "Alice"\nage1 = 25\n# 1age = 30  # Invalid: starts with a digit\n# class = "Python"  # Invalid: "class" is a reserved keyword\n\nprint(_name, age1)`,
        output: `Alice 25`,
    },
    {
        name: 'Multiple Assignments',
        description: 'Python allows multiple variables to be assigned in one line. This can be useful for initializing multiple values efficiently.',
        input: `# Assign multiple variables at once\na, b, c = 10, 20, 30\nprint(a)\nprint(b)\nprint(c)`,
        output: `10\n20\n30`,
    },
    {
        name: 'Swapping Variables',
        description: 'Python makes swapping values between two variables easy without using a temporary variable.',
        input: `# Swap values\na = 5\nb = 10\na, b = b, a\nprint("a =", a)\nprint("b =", b)`,
        output: `a = 10\nb = 5`,
    },
    {
        name: 'Dynamic Typing',
        description: 'Python is dynamically typed, which means you can reassign variables to different data types without any error.',
        input: `# Dynamic typing example\nx = 42\nprint(type(x))\nx = "Now I am a string"\nprint(type(x))`,
        output: `<class 'int'>\n<class 'str'>`,
    },
                ]
            },
             {
                id:3,
                name:"Basic Course 2",
                description:"description daal dena",
                image:'https://img.freepik.com/premium-photo/great-picture-image-will-make-your-work-more-beautiful_987032-102143.jpg',
                Topic:"Data Types",
                TopicData:[
                    {
        name: 'Basic Data Types',
        description: 'Python has several built-in data types including integers, floats, strings, and booleans. These types are used to store numeric values, text, and truth values.',
        input: `# Examples of basic data types\nnum = 10          # int\nprice = 19.99     # float\nname = "Python"   # str\nis_valid = True   # bool\n\nprint(type(num))\nprint(type(price))\nprint(type(name))\nprint(type(is_valid))`,
        output: `<class 'int'>\n<class 'float'>\n<class 'str'>\n<class 'bool'>`,
    },
    {
        name: 'List Data Type',
        description: 'A list is an ordered collection of items which can be of different types. Lists are mutable, meaning you can change their contents.',
        input: `# List example\nfruits = ["apple", "banana", "cherry"]\nfruits.append("orange")\nprint(fruits)`,
        output: `['apple', 'banana', 'cherry', 'orange']`,
    },
    {
        name: 'Tuple Data Type',
        description: 'A tuple is similar to a list, but it is immutable, meaning its values cannot be changed after creation.',
        input: `# Tuple example\ndimensions = (1920, 1080)\nprint(dimensions)\nprint(type(dimensions))`,
        output: `(1920, 1080)\n<class 'tuple'>`,
    },
    {
        name: 'Dictionary Data Type',
        description: 'Dictionaries store data in key-value pairs. They are unordered (before Python 3.7), mutable, and very useful for mapping relationships.',
        input: `# Dictionary example\nperson = {\n    "name": "Alice",\n    "age": 25,\n    "is_student": True\n}\nprint(person["name"])\nprint(person.get("age"))`,
        output: `Alice\n25`,
    },
    {
        name: 'Set Data Type',
        description: 'A set is an unordered collection of unique elements. It is commonly used to remove duplicates or perform set operations like union or intersection.',
        input: `# Set example\nnumbers = {1, 2, 3, 3, 4, 4, 5}\nprint(numbers)`,
        output: `{1, 2, 3, 4, 5}`,
    },
                ]
            },
             {
                id:4,
                name:"Basic Course 2",
                description:"description daal dena",
                image:'https://img.freepik.com/premium-photo/great-picture-image-will-make-your-work-more-beautiful_987032-102143.jpg',
                Topic:"Loops",
                TopicData:[
                     {
        name: 'For Loop Basics',
        description: 'A `for` loop is used to iterate over a sequence (like a list, tuple, string, or range). It repeats the block of code for each item in the sequence.',
        input: `# Print each number from 1 to 5\nfor i in range(1, 6):\n    print(i)`,
        output: `1\n2\n3\n4\n5`,
    },
    {
        name: 'While Loop Basics',
        description: 'A `while` loop executes as long as a condition remains true. It’s useful when the number of iterations is not known beforehand.',
        input: `# Print numbers from 1 to 5 using while loop\ncount = 1\nwhile count <= 5:\n    print(count)\n    count += 1`,
        output: `1\n2\n3\n4\n5`,
    },
    {
        name: 'Looping Through a List',
        description: 'You can use `for` loops to iterate directly over elements in a list. This is useful for performing actions on each item.',
        input: `# Loop through a list of fruits\nfruits = ["apple", "banana", "cherry"]\nfor fruit in fruits:\n    print("I like", fruit)`,
        output: `I like apple\nI like banana\nI like cherry`,
    },
    {
        name: 'Break and Continue',
        description: '`break` is used to exit a loop early, while `continue` skips the current iteration and moves to the next one.',
        input: `# Demonstrate break and continue\nfor i in range(1, 6):\n    if i == 3:\n        continue  # skip 3\n    if i == 5:\n        break     # stop before 5\n    print(i)`,
        output: `1\n2\n4`,
    },
    {
        name: 'Nested Loops',
        description: 'You can nest one loop inside another. Nested loops are useful for working with 2D data like matrices.',
        input: `# Print a multiplication table\nfor i in range(1, 4):\n    for j in range(1, 4):\n        print(i * j, end=" ")\n    print()`,
        output: `1 2 3\n2 4 6\n3 6 9`,
    },
                ]
            },
             {
                id:5,
                name:"Basic Course 2",
                description:"description daal dena",
                image:'https://img.freepik.com/premium-photo/great-picture-image-will-make-your-work-more-beautiful_987032-102143.jpg',
                Topic:"Casting",
                TopicData:[
                    {
        name: 'What is Type Casting?',
        description: 'Type casting means converting one data type into another. Python supports implicit and explicit casting. Explicit casting is done manually using functions like `int()`, `float()`, `str()`, etc.',
        input: `# Convert float to int\nprice = 99.99\nnew_price = int(price)\nprint(new_price)`,
        output: `99`,
    },
    {
        name: 'String to Integer',
        description: 'You can convert a numeric string to an integer using `int()`. The string must contain only digits, or it will throw an error.',
        input: `# Convert string to int\nnum_str = "123"\nnum = int(num_str)\nprint(num + 10)`,
        output: `133`,
    },
    {
        name: 'Integer to String',
        description: 'Use `str()` to convert an integer to a string. This is useful when combining numbers with text in output.',
        input: `# Convert int to string\nage = 25\nmessage = "I am " + str(age) + " years old."\nprint(message)`,
        output: `I am 25 years old.`,
    },
    {
        name: 'Float to Integer and Vice Versa',
        description: 'You can convert a float to an integer using `int()`, which removes the decimal part. Use `float()` to convert an integer to a floating-point number.',
        input: `# Cast float to int and int to float\nx = 10.75\ny = int(x)\nz = float(y)\nprint(y)\nprint(z)`,
        output: `10\n10.0`,
    },
    {
        name: 'Invalid Type Conversion',
        description: 'Trying to cast an invalid string (e.g., containing letters) to a number will result in a `ValueError`. Always validate input before casting.',
        input: `# Invalid casting\nvalue = "abc"\nnum = int(value)  # This will raise an error`,
        output: `ValueError: invalid literal for int() with base 10: 'abc'`,
    },
                ]
            },
        ]
    }

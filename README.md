# TJTheme

## Installation

1. Inside of a hugo site, run `git init` if there is not an existing git repository.
1. Run `git submodule add https://github.com/monster0506/tjtheme.git themes/TJTheme`
1. Change your theme in `hugo.toml` settings to `theme=TJTheme`

## Configuration

- Append these snippets to your `hugo.toml` file to customize information

### Name

```toml
[params.author]
    name="Your Name"
```

### Socials

```toml
[params.socials]
    github="your github username"
    gitlab="Your Gitlab Name"
    linkedin="Your Linkedin URL"
```

### Newsletter

```toml
[params.newsletter]
    url="<Post Request Action Endpoint>"
```

### Tech Tags

```toml
[params]
    techtags = [ "Go", "Python", "Rust", "React", "C++", "Javascript" ]
```

## Features

### Code

#### Code blocks

    ```python
    def hello_world():
        print("Hello, World!")
    ```

    ```cpp
    #include <iostream>

    int main() {
        std::cout << "Hello, World!" << std::endl;
        return 0;
    }
    ```

#### Diff

    ```diff
    - This is a text
    + This is text
    ```

#### Inline Code

    This is a demonstration `print("Test")`

### Notices

    {{< alert "warning" >}}
    This is a warning message!
    {{< /alert >}}

Color choices are:

- warning
- info
- success
- error
- default

#### Details

    {{< details "Click to expand" >}}
    {{< alert "default" >}}
    This content is hidden by default.
    You can include **markdown** here!
    {{< /alert >}}
    {{< /details >}}

### Images

#### Basic figure

    {{< figure
    src="/icons/dice.svg"
    alt="Example image"
    caption="This is an example image"
    width="75%" >}}

#### Gallery

    {{< gallery columns=3 >}}
    {{< gallery-image src="/images/1.jpg" caption="Image 1" >}}
    {{< gallery-image src="/images/2.jpg" caption="Image 2" >}}
    {{< gallery-image src="/images/3.jpg" caption="Image 3" >}}
    {{< /gallery >}}

#### Video

    {{< youtube "dQw4w9WgXcQ" >}}

### Math

#### Blocks

    $$\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}$$

#### Inline

    Lorem ipsum hosti. $a^2 + b^2 = c^2$

### External Sites

#### Generic Link

    {{< linkcard
    url="<https://example.com>"
    title="Example Website"
    description="This is an example website"
    image="/images/dice.svg" >}}

--or--

    {{< linkcard
    url="https://example.com"
    title="Example Website"
    description="This is an example website"
    image="/images/dice.svg"
    >}}

#### Github

    {{< github "neovim" "neovim" >}}

### Text

#### Tooltip

    This is a {{< tooltip "This is a helpful tooltip" >}}word with a tooltip{{< /tooltip >}}.

#### Fancy Quote

    {{< quote author="Albert Einstein" source="Letter to Max Born" >}}
    God does not play dice with the universe.
    {{< /quote >}}

#### Badges

    This feature is {{< badge "NEW" "primary" >}} and this one is {{< badge "BETA" "warning" >}}

Color choices are:

- default
- primary
- success
- warning
- error
- info

#### Keyboard Buttons

    Press {{< kbd >}}Ctrl{{< /kbd >}} + {{< kbd >}}C{{< /kbd >}} to copy.

#### Highlight

    This is a {{< highlight >}}highlighted text{{< /highlight >}}

#### Emoji

    {{< emoji "🚀" "small" >}}
    {{< emoji "🤠" "medium" >}}
    {{< emoji "👍" "large" >}}
    {{< emoji "👌" "xlarge" >}}

### Misc

#### Download

    {{< download
    file="/files/example.pdf"
    name="Example PDF"
    size="2.5MB"
    icon="📄" >}}

#### Tabs

    {{< tabs "Tab 1" "Tab 2" "Tab 3" >}}
    {{< tab >}}
    Content for tab 1
    {{< /tab >}}
    {{< tab >}}
    Content for tab 2
    {{< /tab >}}
    {{< tab >}}
    Content for tab 3
    {{< /tab >}}
    {{< /tabs >}}

#### Filetree

    {{< filetree >}}
    - project/
    - package.json
    - README.md
    - src/
        - index.js
        - components/
        - Header.js
        - Footer.js
        - styles/
        - main.css
        - variables.css
    - public/
    - images/
        - logo.png
        - banner.jpg
    - index.html
    {{< /filetree >}}

### Progress Bars

Color choices are:

- accent
- success
- warning
- error
- info

#### Bar

    {{< progress value=75 type="bar" color="success" >}}

#### Circle

    {{< progress value=85 type="circle" color="success" >}}

### Interactives

#### Quiz

    {{< quiz >}}
    Q: What is 2 + 2?

    - A) 3
    - B) 4 [correct]
    - C) 5
    {{< /quiz >}}

#### Flashcard

    {{< flashcard
    front="What is the capital of France?"
    back="Paris is the capital of France" >}}

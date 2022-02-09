# dbs

## Add a new project
Create a new project file in `_projects`, ex 'myproject.md', you can copy the content of an existent one to get started.
Below is a description of the contents of the file and what it means. The part prefixed with `//` is comments.

```
---
layout: project // This should always be project, it decides what layout should be used for the page.
title: Phone Booth // The title of the project.
order: 3 // This is used for sorting the projects, a higher number means the project comes first in the list. Increment the last used number when adding a project.
image: /assets/images/booth-1.jpg // This is the image to use on the portfolio page. See image section for details.
images: // This is a list of images to display on the page, limit to 3.
  - /assets/images/booth-1.jpg 
  - /assets/images/booth-2.jpg
  - /assets/images/booth-3.jpg  
--- // Below this line is where the content starts. It is using [markdown](https://www.markdownguide.org/cheat-sheet/){:target="_blank"} syntax.
Base10 is a co-working center for tech-startups based in Uppsala. For my Industrial Design thesis work I designed a phone booth for them.

The goal of the project was to create a furniture that could be used in the busy open areas for people that needed to take a call or a Skype meeting on-the-go. The result was a sound-absorbant phone booth, designed to fit in with the interior style of the co-working center.

More information about [Base10](http://base10.se/){:target="_blank"}.

Materials: OSB, metal, polyester (sound absorbant), fabric.

```

## Add images for a project

Upload images into `assets/images`, the name of the image should be desciptive for which project it belongs to. 
The images are then referenced by link in the project template as described above.

Images should be square. If the original image is not square, but it on a white background on a square canvas.  
